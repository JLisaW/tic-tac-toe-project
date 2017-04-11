'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
})

const gameEvents = require('./game-engine/events.js')

$(() => {
  gameEvents.addHandlers()
  $('#new-game').on('submit', gameEvents.onNewGame)
})
