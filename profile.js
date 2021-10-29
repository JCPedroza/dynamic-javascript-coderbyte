const { performance } = require('perf_hooks')

const { floor, random } = Math

const verbose = true

const shuffleArray = (array) => {
  for (let pivot = array.length - 1; pivot > 0; pivot--) {
    const swap = floor(random() * (pivot + 1))
    ;[array[pivot], array[swap]] = [array[swap], array[pivot]]
  }
}

const profileFunction = (funInfo, argArray) => {
  if (verbose) {
    console.log(`  profiling ${funInfo.id} with args ${argArray}`)
  }

  const start = performance.now()
  const result = funInfo.fun(...argArray)
  const elapsed = performance.now() - start

  if (verbose) {
    console.log(`  result is: ${result}\n`)
  }

  return elapsed
}

const profile = (funInfoArray, argArray, repetitions) => {
  const results = {}

  for (let round = 1; round <= repetitions; round++) {
    if (verbose) {
      console.log(`starting round ${round} of ${repetitions}`)
    }

    shuffleArray(funInfoArray)

    funInfoArray.forEach(funInfo => {
      results[funInfo.id] ??= { total: 0 }
      results[funInfo.id].total += profileFunction(funInfo, argArray)
    })

    funInfoArray.forEach(funInfo => {
      results[funInfo.id].average = results[funInfo.id].total / repetitions
    })
  }

  return Object.entries(results).sort((a, b) => a[1].total - b[1].total)
}

module.exports = profile
