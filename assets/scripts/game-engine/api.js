'use strict'

const config = require('../config.js')
const store = require('../store.js')

// const indexOfGames = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET'
//   })
// }

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'square': {
          'index': 0,
          'value': 'x'
        }
      },
      'over': false
    }
  })
}

const getGame = function (data) {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/games:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame
}
