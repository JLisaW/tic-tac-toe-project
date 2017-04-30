'use strict'
// const gamesUi = require('../game-engine/events.js')
// const gamesApi = require('../game-engine/api.js')
// const newGame = require('../game-engine/events.js')

const board = ['', '', '', '', '', '', '', '', '']
let win = false
let currentMove = 0
let player = 'x'

// const onEndGame = function () {
//   if (win === true) {
//     $(this).text('')
//   } else {
//     $(this).text('')
//   }
// }
// const resetBoard = () => {
//   // onNewGame()
//   board
//   player = 'x'
//   currentMove = 0
//   win = false
//   // $('#container').removeClass('hidden')
//   $('.square').on('click', onNewGame)
//   $('.square').text('')
// }
// check for winner

// const endGame = function () {
//   for (let i = board.length; i > 0; i--) {
//     board.pop()
//   }
// }

// const endGame = function () {
//   for (let i = board.length; i > 0; i--) {
//     board.pop()
//   }
// }

const playerWin = function () {
  console.log(board)
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    console.log('row 1')
    // $('.board').hide()
    $('.winBanner').text('player ' + board[1] + ' wins!')
    $('.winBanner').show()
    win = true
    console.log('win012')
    console.log('')
    // $('.square').text('')
    return
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[3] + ' wins!')
    $('.winBanner').show()
    console.log('win345')
    return
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[6] + ' wins!')
    $('.winBanner').show()
    console.log('win678')
    return
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[0] + ' wins!')
    $('.winBanner').show()
    console.log('win036')
    return
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[1] + ' wins!')
    $('.winBanner').show()
    console.log('win147')
    return
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[2] + ' wins!')
    $('.winBanner').show()
    console.log('win258')
    return
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[4] + ' wins!')
    $('.winBanner').show()
    console.log('win048')
    return
  } else if (board[2] === board[4] && board[4] === board[6] && (board[2]) !== '') {
    // $('.board').hide()
    $('.winBanner').text('player ' + board[2] + ' wins!')
    $('.winBanner').show()
    console.log('win246')
    return
  }
}
// const changeUiMessage = (txt) => {
//   const uimessage = $('#ui-message')[0]
//   $(uimessage).text(txt)
// }
module.exports = {
  board,
  playerWin
  // changeUiMessage
}
