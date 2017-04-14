'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

require('./example')

const authEvents = require('./auth/events.js')
const gameEngineEvents = require('./game-engine/events.js')

// $(document).ready(function () {
// })

$(() => {
  authEvents.addHandlers()
  gameEngineEvents.addGameHandler()
})

module.exports = {

}
