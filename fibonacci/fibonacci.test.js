const fibForLoop = require('./fibonacci-for')
const fibRecursive = require('./fibonacci-recursive')
const fibRecursiveMemo = require('./fibonacci-recursive-memo')
const fibRecursiveMinimal = require('./fibonacci-recursive-minimal')

const checkFirstFiboNums = (fiboFunction) => {
  const inputs = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const expectedOutputs = [1, 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  const results = inputs.map(input => fiboFunction(input))

  expect(results).toEqual(expectedOutputs)
}

const buildTestInfo = (functionId) =>
  `${functionId} fib(n) calculates the first fibonacci numbers`

test(buildTestInfo('for loop'), () => {
  checkFirstFiboNums(fibForLoop.fun)
})

test(buildTestInfo('recursive'), () => {
  checkFirstFiboNums(fibRecursive.fun)
})

test(buildTestInfo('recursive with memoization'), () => {
  checkFirstFiboNums(fibRecursiveMemo.fun)
})

test(buildTestInfo('recursive minimalistic'), () => {
  checkFirstFiboNums(fibRecursiveMinimal.fun)
})
