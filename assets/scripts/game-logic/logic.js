'use strict'
// const gamesUi = require('../game-engine/events.js')
const gameApi = require('../game-engine/api.js')
// const onUpdateGame = require('../game-engine/events.js')

const board = ['', '', '', '', '', '', '', '', '']
const player = 'x'
// const currentMove = 1
const forUpdate = {
  'game': {
    'over': true
  }
}
// let win = false // game hasn't started yet

// game starts with player 'x' and no move yet

// const updateBoard = function (boardArray) {
//   for (let i = 0; i < 9; i++) {
//     if (boardArray[i] === 0) {
//       board[i] = 5
//       boardArray[i] = 5
//     }
//   }
// }

// check for winner
const playerWin = function () {
  console.log(board)
  // console.log('the board values are', board[0], board[1], board[2])
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    console.log('row 1')
    $('.winBanner').text('player ' + board[1] + ' wins!')
    $('.winBanner').show()
    console.log('win012')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win345')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win678')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win036')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win147')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win258')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win048')
    // gameApi.onUpdateGame(forUpdate)
    return
  } else if (board[2] === board[4] && board[4] === board[6] && (board[2]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
    $('.winBanner').show()
    console.log('win246')
    // updateBoard(board)
    // gameApi.onUpdateGame(forUpdate)
    return
  }
}

// game draw
// if (currentMove === 10 && win === false) {
//   $('.drawBanner').text('Game is a draw')
//   $('.drawBanner').show()
// } else if (win === true) {
//   $('.winBanner').text('player ' + player + ' wins!')
//   $('.winBanner').show()
// }

// const gameOver = validMove.playerWin()
// if (gameOver) {
//   $('.winBanner').text('player ' + player + ' wins!')
//   $('.winBanner').show()
// } else {
//   onClickSquare()
// }

// const addHandlers = () => {
//   $('.box[data-id]').on('click', gameEngine)

module.exports = {
  board,
  playerWin
}
