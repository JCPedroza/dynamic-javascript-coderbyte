const { buildProfiler } = require('../profile')

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
  micro: { argArray: [10], iterations: 5000 },
  small: { argArray: [20], iterations: 2000 },
  medium: { argArray: [35], iterations: 5 },
  large: { argArray: [50], iterations: 2000 },
  giant: { argArray: [70], iterations: 2000 }
}

module.exports = buildProfiler(profileSubjects, scenarios)
