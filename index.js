const { printProfileResults } = require('./profile')

const profileFibonacci = require('./fibonacci/fibonacci.profile')

profileFibonacci().forEach(result => printProfileResults(result))
