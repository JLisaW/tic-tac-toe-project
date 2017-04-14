'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
const playerWin = require('../game-logic/logic.js')
// const getFormFields = require(`../../../lib/get-form-fields`)
const board = require('../game-logic/logic.js').board
let player = 'x'

const togglePlayer = function () {
  if (player === 'x') {
    player = 'o'
    playerWin.playerWin()
  } else {
    player = 'x'
    playerWin.playerWin()
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  gamesApi.create()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

const onClickSquare = function () {
  event.preventDefault()
  console.log('current player is', player)
  if (player === 'x') {
    $(this).text('X')
    board[$(this).attr('id')] = 'x'
  } else {
    $(this).text('O')
    board[$(this).attr('id')] = 'o'
  }
  // $(this).attr("id")
  togglePlayer()
}

const addGameHandler = function () {
  $('.square').on('click', onClickSquare)
}

module.exports = {
  onNewGame,
  addGameHandler,
  playerWin
}
