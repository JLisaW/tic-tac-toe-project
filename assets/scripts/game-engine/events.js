'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
const playerWinLogic = require('../game-logic/logic.js')
const getFormFields = require('../../../lib/get-form-fields')

let board = require('../game-logic/logic.js')
let player = 'x'

// togglePlayer is to switch between player 'x' and player 'o'
const togglePlayer = function () {
  console.log('toggling player')
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

let currentMove = 1
const win = false

// const forUpdate = {
//   'game': {
//     'cell': {
//       'index': index,
//       'value': value
//     },
//     'over': gameOver
//   }
// }

// const clearBoard = function () {
//   console.log('in the clearBoard function now')
//   for (const '' in board) {
//     board[0] = ''
//   }
// }

const onNewGame = function (event) {
  console.log('onNewGame')
  event.preventDefault()
  console.log('new game started')
  // board.clearBoard()
  // $('.square'['id']).text('')
  // board.board[2] = 'B'
  player = 'x'
  // win = false
  // forUpdate.board.over = win
  currentMove = 1
  // const data = getFormFields(event.target)
  gamesApi.createGame()
      .then(gamesUi.createGameSuccess)
      .catch(gamesUi.createGameError)
  $(this).attr('id')
}

const onClickSquare = function (event) {
  // event.preventDefault()
  console.log('current player is', player)
  if (player === 'x' && win === false) {
    $(this)[0].innerText = 'x'
    board.board[parseInt($(this).attr('id'))] = 'x'
    currentMove += 1
    playerWinLogic.playerWin()
    console.log('player win checked 1 within onClickSquare')
  } else if (player === 'o' && win === false) {
    console.log('onClickSquare player o')
    $(this)[0].innerText = 'o'
    board.board[parseInt($(this).attr('id'))] = 'o'
    currentMove += 1
    playerWinLogic.playerWin()
    console.log('player win checked 2')
  } if (currentMove === 10 && win === false) {
    $('.drawBanner').text('Game is a draw')
    $('.drawBanner').show()
  } togglePlayer()
  gamesApi.updateGame(board)
}

// const onGetGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   if (game.id.length !== 0) {
//     gamesApi.show(game.id)
//       .then(gamesUi.onSuccess)
//       .catch(gamesUi.onError)
//   } else {
//     console.log('Please provide a game id.')
//   }
// }

const onGetGames = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.id.length !== 0) {
    gamesApi.show(game.id)
      .then(gamesUi.onGetGamesSuccess)
      .catch(gamesUi.onGetGamesError)
  } else {
    console.log('Please provide the game id.')
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('onUpdateGame called')
  const data = getFormFields(event.target)
  gamesApi.updateGame(data)
      .then(gamesUi.onUpdateSuccess)
      .catch(gamesUi.onUpdateError)
}

const onGetStats = function (event) {
  event.preventDefault()
  gamesApi.getStats()
    .then(gamesUi.onGetStatsSuccess)
    .catch(gamesUi.onGetStatsError)
}

const addGameHandler = function () {
  console.log('addGameHandler')
  $('.square').one('click', onClickSquare)
  $('#new-game').on('click', onNewGame)
  // $('.game-search').on('click', onGetGame)
  $('.games').on('click', onGetGames)
  // $('.update-game').on('click', onUpdateGame)
  // $('.gameStats').on('click', onGetStats)
}

module.exports = {
  addGameHandler,
  onGetStats,
  onUpdateGame
}
