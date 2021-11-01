const testSubjects = [
  require('./fibonacci-analytic'),
  require('./fibonacci-clike'),
  require('./fibonacci-recursive-memo'),
  require('./fibonacci-recursive-minimal'),
  require('./fibonacci-recursive'),
  require('./fibonacci-reduce-iterator'),
  require('./fibonacci-tabulation-small'),
  require('./fibonacci-tabulation')
]

const checkFirstFiboNums = (testSubject) => {
  const inputs = [-1, 0, 1, 2, 3, 4, 5, 6.13, 7.725]
  const expectedOutputs = [undefined, 0, 1, 1, 2, 3, 5, 8, 13]
  const results = inputs.map(input => testSubject.fun(input))

  expect(results).toEqual(expectedOutputs)
}

const buildTestInfo = (testSubject) =>
  `${testSubject.id} fib(n) calculates the first fibonacci numbers`

const runTest = (testSubject) => test(buildTestInfo(testSubject), () => {
  checkFirstFiboNums(testSubject)
})

testSubjects.forEach(testSubject => runTest(testSubject))
