'use strict'

const config = require('../config.js')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET'
  })
}

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST'
  })
}

const getGame = function () {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/games:id',
    method: 'GET'
  })
}

module.exports = {
  create,
  index,
  getGame
}
