'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('./ui.js')

const onNewGame = function (event) {
  event.preventDefault()

  gamesApi.create()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

const addHandlers = () => {
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
