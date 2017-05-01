'use strict'
const store = require('../store.js')
const logic = require('../../scripts/game-logic/logic.js')
// const onNewGame = require('./events.js')

let gamesPlayed = 0

const createGameSuccess = function (data) {
  store.game = data.game
  logic.userMessage('New Game!')
  $('.board').show()
}

const createGameError = function (response) {
  logic.userMessage('Something went wrong, please try again.')
  $('.board').hide()
}

const resetBoardSuccess = function (data) {
  store.game = data.game
  logic.userMessage('Board Reset!')
  $('.board').show()
  console.log('create game success:', store.game)
}

const resetBoardFailure = function (data) {
  store.game = data.game
  logic.userMessage('Something went wrong, please try again.')
  $('.board').hide()
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  gamesPlayed = store.game.length
  $('.gameStats').text('You played ' + store.game.length + 'games.')
  $('.gameStats').show
  logic.userMessage('You have successfullly updated a game.')
}

const onUpdateFailure = function (response) {
  logic.userMessage('Something went wrong, please try again.')
}

const getGamesSuccess = (data) => {
  store.games = data.games
  gamesPlayed = store.games.length
  $('.gameStats').text('You have played ' + store.games.length + ' games!')
}

const getGamesFailure = (response) => {
  logic.userMessage('Something went wrong, please try again.')
}

module.exports = {
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
