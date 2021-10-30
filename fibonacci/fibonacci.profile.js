const profile = require('../profile')

const profileSubjects = [
  require('./fibonacci-tabulation'),
  require('./fibonacci-tabulation-small'),
  require('./fibonacci-recursive'),
  require('./fibonacci-recursive-memo'),
  require('./fibonacci-recursive-minimal')
]

const profileSpec = {
  argArray: [40],
  iterations: 5
}

const profileFibonacci = () => profile(profileSubjects, profileSpec)

module.exports = profileFibonacci
