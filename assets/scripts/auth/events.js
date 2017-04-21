'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
// const gameEngineEvents = require('../game-engine/events.js')
const gamesApi = require('../game-engine/api.js')
const gamesUi = require('./ui.js')
const autoSignInSuccess = require('./ui.js')
const autoSignInFailure = require('./ui.js')

// const onSignUp = function (event) {
//   const data = getFormFields(this)
//   console.log('Sign Up Complete')
//
//   event.preventDefault()
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .then(() => {
//       api.signInAuto(data)
//       .then(ui.autoSignInSuccess)
//       .catch(ui.autoSignInFailure)
//     })
//     .catch(ui.signUpFailure)
// }

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log('SignIn complete!')

  event.preventDefault()
  gamesApi.signIn(data)
    .then(gamesUi.signInSuccess)
    .catch(gamesUi.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gamesApi.onSignUp(data)
    .then(gamesUi.signUpSuccess)
    .then(() => {
      gamesApi.signInAuto(data)
        .then(gamesUi.autoSignInSuccess)
        .catch(gamesUi.autoSignInFailure)
    })
    .catch(gamesUi.signUpFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('SignOut complete')
  const data = getFormFields(event.target)
  gamesApi.signOut(data)
    .then(gamesUi.signOutSuccess)
    .catch(gamesUi.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password Success')
  const data = getFormFields(event.target)
  gamesApi.changePassword(data)
    .then(gamesUi.changePasswordSuccess)
    .catch(gamesUi.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers,
  autoSignInSuccess,
  autoSignInFailure
}
