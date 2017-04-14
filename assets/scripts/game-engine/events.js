'use strict'

const gamesApi = require('../game-engine/api.js')
const gamesUi = require('../game-engine/ui.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

let player = 'x'

const togglePlayer = function () {
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  gamesApi.create()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

const onClickSquare = function () {
  event.preventDefault()
  if (player === 'x') {
    $(this).text('X')
  } else {
    $(this).text('O')
  }

  // $(this).attr("id")

  togglePlayer()
}

const addGameHandler = function () {
  $('.square').on('click', onClickSquare)
}

module.exports = {
  onNewGame,
  addGameHandler
}
