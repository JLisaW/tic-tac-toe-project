'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
const playerWinLogic = require('../game-logic/logic.js')
const getFormFields = require(`../../../lib/get-form-fields`)

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

// const onClickSquare = function () {
//   event.preventDefault()
//   console.log('current player is', player)
//   if (player === 'x') {
//     $(this).text('X')
//     board[$(this).attr('id')] = 'x'
//   } else {
//     $(this).text('O')
//     board[$(this).attr('id')] = 'o'
//   }
//   // $(this).attr("id")
//   togglePlayer()
// }
let currentMove = 1
const win = false

const onNewGame = function () {
  event.preventDefault()
  console.log('new game started')
  $('.square'['id']).text('')
  board.board[2] = 'B'
  player = 'x'
  currentMove = 1
  gamesApi.onNewGame()
  .then(gamesUi.onSuccess)
  .catch(gamesUi.onError)
  $(this).attr('id')
}

// const updateBoard = function (boardArray) {
//   for (let i = 0; i < 9; i++) {
//     if (boardArray[i] === 0) {
//       board[i] = 5
//       boardArray[i] = 5
//     }
//   }
// }

const onClickSquare = function () {
  event.preventDefault()
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
  } else if (currentMove === 10 && win === false) {
    $('.drawBanner').text('Game is a draw')
    $('.drawBanner').show()
  } togglePlayer()
}

// const onNewGame = function (event) {
//   event.preventDefault()
//   gamesApi.create()
//     .then(gamesUi.onSuccess)
//     .catch(gamesUi.onError)
// }

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.id.length !== 0) {
    gamesApi.show(game.id)
      .then(gamesUi.onSuccess)
      .catch(gamesUi.onError)
  } else {
    console.log('Please provide a game id.')
  }
}

const onGetGames = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.id.length !== 0) {
    gamesApi.show(game.id)
        .then(gamesUi.onSuccess)
        .catch(gamesUi.onError)
  } else {
    console.log('Please provide the game id.')
  }
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const game = data.game
  if (game.id.length !== 0) {
    gamesApi.updateGame(data)
    .then(gamesUi.onUpdateSuccess)
    .catch(gamesUi.onUpdateError)
  } else {
    console.log('Please provide a game id!')
  }
}

const onGetStats = function (event) {
  event.preventDefault()
  gamesApi.getStats()
  .then(gamesUi.onGetStatsSuccess)
  .catch(gamesUi.onGetStatsError)
}

const addGameHandler = function () {
  $('.square').on('click', onClickSquare)
  $('.new-game').on('click', onNewGame)
  $('.game-search').on('click', onGetGame)
  $('.games').on('click', onGetGames)
  $('.update-game').on('click', onUpdateGame)
  $('.gameStats').on('click', onGetStats)
}

module.exports = {
  addGameHandler
}
