'use strict'

const store = require('../store.js')
const gameLogic = require('../game-logic/logic.js')
const autoSignInSuccess = function (data) {
  store.user = data.user
  // $('#sign-out').show()
  // $('#new-game').show()
  // $('#stats').show()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
}
const signUpSuccess = (data) => {
  console.log('Sign Up Successful')
  // gameLogic.changeUiMessage('thanks for signing up! please sign in')
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (response) => {
  console.log('Sign In Successful')
  store.user = response.user
  // $('#modalSignInSuccess').modal('show')
}

const signInFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (response) => {
  console.log('Sign Out Successful')
  store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  console.log('Password Changed Successfully')
}

const changePasswordFailure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  autoSignInSuccess
}
