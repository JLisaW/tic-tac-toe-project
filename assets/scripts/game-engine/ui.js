'use strict'
const store = require('../store.js')
// const endGame = require('./events.js')

let gamesPlayed = 0

// const onNewGame = function (data) {
//   store.game = data.game
//   console.log('New Game Created')
//   if (!data) {
//     console.warn('Either you have the wrong game ID or game has not been played yet.')
//   } else if (data.game) {
//     console.log(data.game)
//   } else {
//     console.table(data.game)
//   }
// }

const createGameSuccess = function (response) {
  console.log('game created')
  store.game = response.game
  console.log('create game success:', store.game)
}

const createGameError = function (response) {
  console.error(response)
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  gamesPlayed = store.game.length
  $('.gameStats').text('You played ' + store.game.length + 'games.')
  $('.gameStats').show
  console.log('You have successfully updated a game.')
}

const onUpdateFailure = function (response) {
  console.error(response)
}
module.exports = {
  // onNewGame,
  createGameSuccess,
  createGameError,
  onUpdateSuccess,
  onUpdateFailure,
  gamesPlayed
}
