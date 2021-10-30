const { profile } = require('../profile')

const profileSubjects = [
  require('./fibonacci-tabulation'),
  require('./fibonacci-tabulation-small'),
  require('./fibonacci-recursive'),
  require('./fibonacci-recursive-memo'),
  require('./fibonacci-recursive-minimal')
]

const profileSpec = {
  argArray: [35],
  iterations: 10
}

const profileFibonacci = () => profile(profileSubjects, profileSpec)

module.exports = profileFibonacci
