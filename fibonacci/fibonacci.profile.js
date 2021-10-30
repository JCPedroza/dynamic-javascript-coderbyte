const { profile } = require('../profile')

const profileSubjects = [
  require('./fibonacci-recursive-memo'),
  require('./fibonacci-recursive-minimal'),
  require('./fibonacci-recursive'),
  require('./fibonacci-reduce-iterator'),
  require('./fibonacci-tabulation-small'),
  require('./fibonacci-tabulation')
]

const profileSpec = {
  argArray: [37],
  iterations: 15
}

const profileFibonacci = () => profile(profileSubjects, profileSpec)

module.exports = profileFibonacci
