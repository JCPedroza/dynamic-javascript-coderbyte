const { performance } = require('perf_hooks')

const { floor, random } = Math

const verbose = true

const shuffleArray = (array) => {
  for (let pivot = array.length - 1; pivot > 0; pivot--) {
    const swap = floor(random() * (pivot + 1))
    ;[array[pivot], array[swap]] = [array[swap], array[pivot]]
  }
}

const profileFunction = (subject, argArray) => {
  if (verbose) {
    console.log(`  profiling ${subject.id} with args ${argArray}`)
  }

  const start = performance.now()
  const result = subject.fun(...argArray)
  const elapsed = performance.now() - start

  if (verbose) {
    console.log(`  result is: ${result}\n`)
  }

  return elapsed
}

const profile = (profileSubjects, argArray, repetitions) => {
  const results = {}

  for (let round = 1; round <= repetitions; round++) {
    if (verbose) {
      console.log(`starting round ${round} of ${repetitions}`)
    }

    shuffleArray(profileSubjects)

    profileSubjects.forEach(subject => {
      results[subject.id] ??= { total: 0 }
      results[subject.id].total += profileFunction(subject, argArray)
    })

    profileSubjects.forEach(subject => {
      results[subject.id].average = results[subject.id].total / repetitions
    })
  }

  return Object.entries(results).sort((a, b) => a[1].total - b[1].total)
}

module.exports = profile
