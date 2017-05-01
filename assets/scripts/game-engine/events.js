'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
const playerWinLogic = require('../game-logic/logic.js')
const getFormFields = require('../../../lib/get-form-fields')

let userStats = {
  games: 0
}

// togglePlayer is to switch between player 'x' and player 'o'
const togglePlayer = function () {
  console.log('toggling player')
  if (playerWinLogic.player === 'x') {
    playerWinLogic.player = 'o'
  } else {
    playerWinLogic.player = 'x'
  }
}

// $('#resetGame').on('click', function () {
//   board.board = ['', '', '', '', '', '', '', '', '']
//   console.log(board.board)
//   win = false
//   player = 'x'
//   currentMove = 0
//   $('.board').show()
//   $('.square').text('')
//   $('.winBanner').hide()
//   $('.drawBanner').hide()
// })
const onNewGame = function (event) {
  console.log('onNewGame')
  event.preventDefault()
  playerWinLogic.win = false
  playerWinLogic.player = 'x'
  playerWinLogic.currentMove = 0
  $('.board').show()
  $('.square').text('')
  $('.winBanner').hide()
  $('.drawBanner').hide()
  console.log('new game started')
  gamesApi.createGame()
      .then(gamesUi.createGameSuccess)
      .catch(gamesUi.createGameError)
  $(this).attr('id')
}

const onClickSquare = function (event) {
  event.preventDefault()
  console.log('current player is', playerWinLogic.player)
  if (playerWinLogic.player === 'x' && playerWinLogic.win === false) {
    $(this)[0].innerText = 'x'
    playerWinLogic.board[parseInt($(this).attr('id'))] = 'x'
    playerWinLogic.currentMove += 1
    playerWinLogic.playerWin()
    console.log('player win checked 1 within onClickSquare')
  } else if (playerWinLogic.player === 'o' && playerWinLogic.win === false) {
    console.log('onClickSquare player o')
    $(this)[0].innerText = 'o'
    playerWinLogic.board[parseInt($(this).attr('id'))] = 'o'
    playerWinLogic.currentMove += 1
    playerWinLogic.playerWin()
    console.log('player win checked 2')
  }
  togglePlayer()
  if (playerWinLogic.currentMove === 9 && playerWinLogic.win === false) {
    $('.drawBanner').text('Game is a draw')
    $('.drawBanner').show()
  } gamesApi.updateGame(playerWinLogic.board[parseInt($(this).attr('id'))])
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

const resetBoard = function (event) {
  console.log('reset board')
  event.preventDefault()
  $('#resetGame').on('click', function () {
    playerWinLogic.board = ['', '', '', '', '', '', '', '', '']
    // $('.board').attr('id')
    console.log(playerWinLogic.board)
    playerWinLogic.win = false
    playerWinLogic.player = 'x'
    playerWinLogic.currentMove = 0
    $('.board').show()
    $('.square').text('')
    $('.winBanner').hide()
    $('.drawBanner').hide()
  })
}

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
  console.log('onGetStats fired')
  gamesApi.getGame()
    .then(gamesUi.getGamesSuccess)
    .catch(gamesUi.getGamesFailure)
}

const addGameHandler = function () {
  console.log('addGameHandler')
  $('.square').one('click', onClickSquare)
  $('#new-game').on('click', onNewGame)
  // $('.game-search').on('click', onGetGame)
  $('.games').on('click', onGetGames)
  $('.update-game').on('click', onUpdateGame)
  $('.gameStats').on('click', onGetStats)
  $('#resetGame').on('click', resetBoard)
}

module.exports = {
  addGameHandler,
  onGetStats,
  onUpdateGame,
  onNewGame
}
