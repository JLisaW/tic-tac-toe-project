'use strict'

const board = ['', '', '', '', '', '', '', '', '']
const player = 'x'

const playerWin = function () {
  if (board[0] === board[1] && board[1] === board[2] && (board[0]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[3] === board[4] && board[4] === board[5] && (board[3]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[6] === board[7] && board[7] === board[8] && (board[6]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[0] === board[3] && board[3] === board[6] && (board[0]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[1] === board[4] && board[4] === board[7] && (board[1]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[2] === board[5] && board[5] === board[8] && (board[2]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[0] === board[4] && board[4] === board[8] && (board[0]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  } else if (board[2] === board[4] && board[4] === board[6] && (board[1]) !== '') {
    $('.winBanner').text(player + 'wins!')
    $('.winBanner').show()
  }
}

module.exports = {
  board,
  playerWin
}
