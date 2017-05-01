'use strict'

const store = require('../store.js')
const logic = require('../game-logic/logic.js')

const signUpSuccess = (data) => {
  logic.userMessage('You have successfullly signed up, please sign in.')
  $('.board').hide()
}

const signUpFailure = (error) => {
  logic.userMessage('Please choose a different username.')
  $('.board').hide()
}
const signInSuccess = (response) => {
  store.user = response.user
  logic.userMessage('You have successfully signed in.  Please click new game.')
  $('.board').hide()
}

const signInFailure = (response) => {
  logic.userMessage('Sign in unsuccessful, please try again.')
  $('.board').hide()
}

const signOutSuccess = (response) => {
  store.user = null
  logic.userMessage('You have successfully signed out.')
  $('.board').hide()
}

const signOutFailure = (response) => {
  logic.userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (response) => {
  logic.userMessage('Password Change Successful.')
}

const changePasswordFailure = (response) => {
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
  changePasswordFailure
}
