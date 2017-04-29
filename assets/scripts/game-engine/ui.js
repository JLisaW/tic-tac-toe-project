'use strict'
const store = require('../store.js')
// const resetGame = require('./events.js')

let gamesPlayed = 0

const createGameSuccess = function (data) {
  console.log('game created')
  store.game = data.game
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

const getGamesSuccess = (data) => {
  store.games = data.games
  gamesPlayed = store.games.length
  $('.gameStats').text('You have played ' + store.games.length + ' games!')
  $('.gameStats').show()
}

const getGamesFailure = (error) => {
  console.error(error)
}

module.exports = {
  // onNewGame,
  createGameSuccess,
  createGameError,
  onUpdateSuccess,
  onUpdateFailure,
  gamesPlayed,
  getGamesSuccess,
  getGamesFailure
}
