const { printProfileResults } = require('./profile')

const profileFibonacci = require('./fibonacci/fibonacci.profile')

printProfileResults(profileFibonacci())
