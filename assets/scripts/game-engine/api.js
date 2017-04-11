'use strict'

const config = require('../config.js')

const create = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST'
  })
}

module.exports = {
  create
}
