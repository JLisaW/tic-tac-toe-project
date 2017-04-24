'use strict'
const store = require('../store.js')

let gamesPlayed = 0

const onCreateSuccess = function (data) {
  store.game = data.game
  console.log('New Game Created')
  if (!data) {
    console.warn('Either you have the wrong game ID or game has not been played yet.')
  } else if (data.game) {
    console.log(data.game)
  } else {
    console.table(data.game)
  }
}

const onCreateError = function (response) {
  console.error(response)
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  gamesPlayed = store.game.length
  $('.gameStats').text('You played ' + store.games.length + 'games.')
  $('.gameStats').show
  console.log('You have successfully updated a game.')
}

const onUpdateFailure = function (response) {
  console.error(response)
}
module.exports = {
  onCreateSuccess,
  onCreateError,
  onUpdateSuccess,
  onUpdateFailure,
  gamesPlayed
}
