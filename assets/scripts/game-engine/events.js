'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
const playerWin = require('../game-logic/logic.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const board = require('../game-logic/logic.js').board

let player = 'x'

// togglePlayer is to switch between player 'x' and player 'o'
const togglePlayer = function () {
  if (player === 'x') {
    player = 'o'
    playerWin.playerWin()
  } else {
    player = 'x'
    playerWin.playerWin()
  }
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

const onNewGame = function (event) {
  event.preventDefault()
  gamesApi.create()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

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
  const game = game.book
  if (game.id.length !== 0) {
    gamesApi.update(data)
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

// const onGameOver = function () {
// }

// const validMove = function () {
// }

const addGameHandler = function () {
  $('.square').on('click', onClickSquare)
  $('.new-game').on('click', onNewGame)
  $('game-search').on('click', onGetGame)
  $('.games').on('click', onGetGames)
  $('update-game').on('click', onUpdateGame)
  $('gameStats').on('click', onGetStats)
}

module.exports = {
  addGameHandler,
  playerWin
}
