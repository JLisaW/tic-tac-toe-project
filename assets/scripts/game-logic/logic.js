'use strict'
// const gamesUi = require('../game-engine/events.js')
const gamesApi = require('../game-engine/api.js')
const onUpdatePlayedGame = require('../game-engine/events.js')

const board = ['', '', '', '', '', '', '', '', '']
const player = 'x'
// game starts with player 'x' and no move yet
const currentMove = 1
// let win = false // game hasn't started yet
const win = false
const forUpdate = {
  'game': {
    'over': true
  }
}

// check for winner
const playerWin = function () {
  console.log(board)
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    console.log('row 1')
    $('.winBanner').text('player ' + board[1] + ' wins!')
    $('.winBanner').show()
    console.log('win012')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    $('.winBanner').text('player ' + board[3] + ' wins!')
    $('.winBanner').show()
    console.log('win345')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    $('.winBanner').text('player ' + board[6] + ' wins!')
    $('.winBanner').show()
    console.log('win678')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    $('.winBanner').text('player ' + board[0] + ' wins!')
    $('.winBanner').show()
    console.log('win036')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    $('.winBanner').text('player ' + board[1] + ' wins!')
    $('.winBanner').show()
    console.log('win147')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    $('.winBanner').text('player ' + board[2] + ' wins!')
    $('.winBanner').show()
    console.log('win258')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    $('.winBanner').text('player ' + board[4] + ' wins!')
    $('.winBanner').show()
    console.log('win048')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  } else if (board[2] === board[4] && board[4] === board[6] && (board[2]) !== '') {
    $('.winBanner').text('player ' + board[2] + ' wins!')
    $('.winBanner').show()
    console.log('win246')
    gamesApi.onUpdatePlayedGame(forUpdate)
    return
  }
}

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
