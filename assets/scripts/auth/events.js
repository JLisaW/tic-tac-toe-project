'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
// const gameEngineEvents = require('../game-engine/events.js')
const api = require('./api')
const ui = require('./ui')
// const gamesApi = require('../game-engine/api.js')
// const gamesUi = require('./ui.js')

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log('Sign Up Complete')

  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log('SignIn complete!')

  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('SignOut complete')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password Success')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  // $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
