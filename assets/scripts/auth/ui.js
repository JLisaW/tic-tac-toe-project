'use strict'

const store = require('../store.js')

// const autoSignInSuccess = function (data) {
//   store.user = data.user
//   $('#signOut').show()
//   $('#startGame').show()
//   $('#stats').show()
//   $('#sign-up').hide()
//   $('#sign-in').hide()
//   $('#change-password').show()
// }
const signUpSuccess = (data) => {
  console.log('Sign Up Successful')
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (response) => {
  console.log('Sign In Successful')
  store.user = response.user
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
  changePasswordFailure
  // autoSignInSuccess
}
