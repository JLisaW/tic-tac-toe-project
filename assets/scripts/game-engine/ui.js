'use strict'
const store = require('../store.js')
const logic = require('../../scripts/game-logic/logic.js')
// const onNewGame = require('./events.js')

let gamesPlayed = 0

const createGameSuccess = function (data) {
  console.log('game created')
  store.game = data.game
  logic.userMessage('New Game!')
  $('.board').show()
  console.log('create game success:', store.game)
}

const createGameError = function (response) {
  console.error(response)
  logic.userMessage('Something went wrong, please try again.')
  $('.board').hide()
}

const resetBoardSuccess = function (data) {
  console.log('game created')
  store.game = data.game
  logic.userMessage('Board Reset!')
  $('.board').show()
  console.log('create game success:', store.game)
}

const resetBoardFailure = function (data) {
  console.log('game created')
  store.game = data.game
  logic.userMessage('Something went wrong, please try again.')
  $('.board').hide()
  console.log('create game success:', store.game)
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  gamesPlayed = store.game.length
  $('.gameStats').text('You played ' + store.game.length + 'games.')
  $('.gameStats').show
  console.log('You have successfully updated a game.')
  logic.userMessage('You have successfullly updated a game.')
}

const onUpdateFailure = function (response) {
  console.error(response)
  logic.userMessage('Something went wrong, please try again.')
}

const getGamesSuccess = (data) => {
  store.games = data.games
  gamesPlayed = store.games.length
  $('.gameStats').text('You have played ' + store.games.length + ' games!')
}

const getGamesFailure = (error) => {
  console.error(error)
  logic.userMessage('Something went wrong, please try again.')
}

module.exports = {
  // onNewGame,
  createGameSuccess,
  createGameError,
  onUpdateSuccess,
  onUpdateFailure,
  gamesPlayed,
  getGamesSuccess,
  getGamesFailure,
  resetBoardSuccess,
  resetBoardFailure
}
