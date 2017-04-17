'use strict'
const onClickSquare = require('../game-engine/events.js')
// const gameApi = require('../game-engine/api.js')

let board = ['', '', '', '', '', '', '', '', '']
let player = 'x'
let currentMove = 0
let win = false // game hasn't started yet

// game starts with player 'x' and no move yet
const startGame = function () {
  board = ['', '', '', '', '', '', '', '', '']
  player = 'x'
  currentMove = 0
  win = false
}

const validMove = function () {
  if (player === 'x' && board === '' && win === false) {
  } else onClickSquare()
}

// check for winner
const playerWin = function () {
  console.log('player function success 1')
  console.log('the board values are', board[0], board[1], board[2])
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    $('.winBanner').text('player ' + ' wins!')
    $('.winBanner').show()
    console.log('win012')
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win345')
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win678')
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win036')
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win147')
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win258')
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win048')
  } else if (board[2] === board[4] && board[4] === board[6] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win246')
  }
}

// game draw
if (currentMove === 10 && win === false) {
  $('drawBanner').text('Game is a draw')
  $('.drawBanner').show()
} else if (win === true) {
  $('.winBanner').text('player ' + player + ' wins!')
  $('.winBanner').show()
}

const gameOver = validMove.playerWin()
if (gameOver) {
  $('.winBanner').text('player ' + player + ' wins!')
  $('.winBanner').show()
} else {
  onClickSquare()
}

module.exports = {
  board,
  playerWin,
  startGame,
  validMove,
  gameOver
}
