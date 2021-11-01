const { profileScenarios } = require('../profile')

const profileSubjects = [
  require('./fibonacci-analytic'),
  require('./fibonacci-clike'),
  require('./fibonacci-recursive-memo'),
  require('./fibonacci-recursive-minimal'),
  require('./fibonacci-recursive'),
  require('./fibonacci-reduce-iterator'),
  require('./fibonacci-tabulation-small'),
  require('./fibonacci-tabulation')
]

const scenarios = {
  micro: { argArray: [5], iterations: 10000 },
  small: { argArray: [15], iterations: 1000 },
  medium: { argArray: [1], iterations: 1 },
  large: { argArray: [50], iterations: 1000 },
  giant: { argArray: [100], iterations: 1000 }
}

const profileFibonacci = () => profileScenarios(profileSubjects, scenarios)

module.exports = profileFibonacci
