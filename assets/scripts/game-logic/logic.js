'use strict'
// const events = require('../game-engine/events.js')
// const gameApi = require('../game-engine/api.js')

let board = ['', '', '', '', '', '', '', '', '']
let player = 'x'
let currentMove = 0
let win = false

// game starts with player 'x' and no move yet
const startGame = function () {
  board = ['', '', '', '', '', '', '', '', '']
  player = 'x'
  currentMove = 0
  win = false
}

// check for winner
const playerWin = function () {
  console.log('player function success 1')
  console.log('the board values are', board[0], board[1], board[2])
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    $('.winBanner').text('player ' + ' wins!')
    $('.winBanner').show()
    console.log('win012')
    win = true
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win345')
    win = true
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win678')
    win = true
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win036')
    win = true
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win147')
    win = true
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win258')
    win = true
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win048')
    win = true
  } else if (board[2] === board[4] && board[4] === board[6] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win246')
    win = true
  }
}

module.exports = {
  board,
  playerWin,
  startGame
}
