const fibForLoop = require('./fibonacci-for')
const fibRecursive = require('./fibonacci-recursive')
const fibRecursiveMemo = require('./fibonacci-recursive-memo')
const fibRecursiveMinimal = require('./fibonacci-recursive-minimal')

const checkFirstFiboNums = (fiboFunction) => {
  const expected = [1, 1, 1, 1, 2, 3, 5, 8]
  const inputs = [-1, 0, 1, 2, 3, 4, 5, 6]
  const results = inputs.map(input => fiboFunction(input))

  expect(results).toEqual(expected)
}

const buildTestInfo = (functionId) =>
  `${functionId} fib(n) calculates the first fibonacci numbers`

test(buildTestInfo('for loop'), () => {
  checkFirstFiboNums(fibForLoop)
})

test(buildTestInfo('recursive'), () => {
  checkFirstFiboNums(fibRecursive)
})

test(buildTestInfo('recursive with memoization'), () => {
  checkFirstFiboNums(fibRecursiveMemo)
})

test(buildTestInfo('recursive minimalistic'), () => {
  checkFirstFiboNums(fibRecursiveMinimal)
})
