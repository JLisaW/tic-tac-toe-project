'use strict'
// const store = require('../store.js')

const onCreateSuccess = function (data) {
  console.log('New Game Created')
}

const onError = function (response) {
  console.error(response)
}

const onUpdateSuccess = function () {
  console.log('You have successfully updated a game')
}
module.exports = {
  onCreateSuccess,
  onError,
  onUpdateSuccess
}
