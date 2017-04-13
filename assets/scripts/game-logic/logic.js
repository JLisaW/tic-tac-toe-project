'use strict'

// const game = require('./game.js')

const board = ['', '', '', '', '', '', '', '', '']

const checkBoardRow = function () {
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') { return true }
  if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') { return true }
  if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') { return true }
  return false
}

const checkBoardColumn = function () {
  if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') { return true }
  if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') { return true }
  if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') { return true }
  return false
}

const checkBoardDiagonal = function () {
  if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') { return true }
  if (board[2] === board[4] && board[4] === board[6] && (board[1]) !== '') { return true }
  return false
}

const checkWin = function () {
  if (checkBoardRow() === true) { return 'win' }
  if (checkBoardColumn() === true) { return 'win' }
  if (checkBoardDiagonal() === true) { return 'win' }
}

module.exports = {
  board,
  checkBoardDiagonal,
  checkBoardColumn,
  checkBoardRow,
  checkWin
}
