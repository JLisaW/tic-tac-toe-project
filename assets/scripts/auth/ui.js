'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
