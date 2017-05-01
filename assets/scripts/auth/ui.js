'use strict'

const store = require('../store.js')
const logic = require('../game-logic/logic.js')
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
  logic.userMessage('You have successfullly signed up, please sign in.')
}

const signUpFailure = (error) => {
  console.error(error)
  logic.userMessage('Please choose a different username.')
}
const signInSuccess = (response) => {
  console.log('Sign In Successful')
  store.user = response.user
  logic.userMessage('You have successfully signed in.')
}

const signInFailure = (error) => {
  console.error(error)
  logic.userMessage('Sign in unsuccessful, please try again.')
}

const signOutSuccess = (response) => {
  console.log('Sign Out Successful')
  store.user = null
  logic.userMessage('You have successfully signed out.')
}

const signOutFailure = (error) => {
  console.error(error)
  logic.userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (response) => {
  console.log('Password Changed Successfully')
  logic.userMessage('Password Change Successful.')
}

const changePasswordFailure = (error) => {
  console.error(error)
  logic.userMessage('Unsuccessful password change, please try again.')
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
