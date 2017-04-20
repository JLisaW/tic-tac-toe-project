'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = function (index, value, gameOver) {
  console.log('game update called')
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': true
      }
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

const getGameIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame,
  getGameIndex
}
