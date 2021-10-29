const profile = require('../profile')
const fibFor = require('./fibonacci-for')
const fibRecursive = require('./fibonacci-recursive')
const fibMemo = require('./fibonacci-recursive-memo')
const fibMinimal = require('./fibonacci-recursive-minimal')

const n = 40
const argArray = [n]
const repetitions = 5

const fibFunInfo = [
  fibFor,
  fibRecursive,
  fibMemo,
  fibMinimal
]

const profileFibonacci = () => profile(fibFunInfo, argArray, repetitions)

module.exports = profileFibonacci
