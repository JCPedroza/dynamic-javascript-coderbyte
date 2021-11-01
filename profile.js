/**
 * Tools for function profiling.
 */

const { performance } = require('perf_hooks')

const { floor, random } = Math

/**
 * Randomizes the order of the items in the input array in-place
 * Uses the Durstenfeld algorithm (optimized Fisher-Yates)
 * @param {Array} array Array to be shuffled in-place
 */
const shuffleArray = (array) => {
  for (let pivot = array.length - 1; pivot > 0; pivot--) {
    const swap = floor(random() * (pivot + 1))
    ;[array[pivot], array[swap]] = [array[swap], array[pivot]]
  }
}

const writeLogLine = (string = '') => {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(string)
}

const buildLogLine = (subject, round, iterations) => {
  const logId = `profiling ${subject.fun.name} ${subject.id}`
  const logRound = `round ${round} of ${iterations}`
  return `${logId} ${logRound}`
}

const updateLogLine = (subject, round, iterations) => {
  writeLogLine(buildLogLine(subject, round, iterations))
}

const profileFunction = (subject, argArray, round, iterations) => {
  updateLogLine(subject, round, iterations)

  const start = performance.now()
  subject.fun(...argArray)
  const elapsed = performance.now() - start

  return elapsed
}

const profile = (profileSubjects, { argArray, iterations }) => {
  const results = {}

  for (let round = 1; round <= iterations; round++) {
    shuffleArray(profileSubjects)

    profileSubjects.forEach(subject => {
      results[subject.id] ??= { total: 0 }
      results[subject.id].total +=
        profileFunction(subject, argArray, round, iterations)
    })
  }
  writeLogLine()
  console.log()

  profileSubjects.forEach(subject => {
    results[subject.id].average = results[subject.id].total / iterations
  })

  return Object.entries(results).sort((a, b) => a[1].total - b[1].total)
}

// this needs refactor XD
const profileScenarios = (profileSubjects, scenarios) => {
  const scenarioArray = Object.entries(scenarios)
  const results = []
  scenarioArray.forEach(scenario => {
    const subjectFilter = (subject) => {
      return subject.profileScenarios.includes(scenario[0])
    }
    const targetSubjects = profileSubjects.filter(subjectFilter)
    results.push(profile(targetSubjects, scenario[1]))
  })
  return results
}

const profileResultToStr = (profileResult, decimalPlaces = 4) => {
  const idStr = profileResult[0]
  const totalStr = profileResult[1].total.toFixed(decimalPlaces)
  const averageStr = profileResult[1].average.toFixed(decimalPlaces)

  const idLine = `${idStr}\n`
  const totalLine = `total: ${totalStr} ms\n`
  const averageLine = `average: ${averageStr} ms\n`

  return `${idLine}${totalLine}${averageLine}\n`
}

const printProfileResults = (profileResults) => {
  const reducer = (acc, cur) => `${acc}${profileResultToStr(cur)}`
  const profileResultsStr = profileResults.reduce(reducer, '')
  console.log(`\n${profileResultsStr}`)
}

module.exports = {
  profile,
  profileScenarios,
  printProfileResults
}
