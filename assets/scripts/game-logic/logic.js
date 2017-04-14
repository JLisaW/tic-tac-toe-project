'use strict'

const board = ['', '', '', '', '', '', '', '', '']
const player = 'x'
// const game = function () {
//
// }

const playerWin = function () {
  console.log('player function success 1')
  console.log('the board values are', board[0], board[1], board[2])
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    $('.winBanner').text('player ' + player + ' wins!')
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

module.exports = {
  board,
  playerWin
}
