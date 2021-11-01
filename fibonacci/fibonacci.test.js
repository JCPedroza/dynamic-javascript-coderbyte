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

const firstFiboNums = {
  buildTestLabel: (testSubject) =>
    `${testSubject.id} fib(n) calculates the first fibonacci numbers`,

  io: {
    inputs: [-1, 0, 1, 2, 3, 4, 5, 6.13, 7.725],
    expectedOutputs: [undefined, 0, 1, 1, 2, 3, 5, 8, 13]
  },

  targetScenarios: ['micro']
}

const largeFiboNums = {
  buildTestLabel: (testSubject) =>
    `${testSubject.id} fib(n) calculates large fibonacci numbers`,

  io: {
    inputs: [20, 40, 50, 70],
    expectedOutputs: [6_765, 102_334_155, 12_586_269_025, 190_392_490_709_135]
  },

  targetScenarios: ['large', 'giant']
}

const testCases = [firstFiboNums, largeFiboNums]

const checkTestCase = (testSubject, testCase) => {
  const inputs = testCase.io.inputs
  const expectedOutputs = testCase.io.expectedOutputs
  const results = inputs.map(input => testSubject.fun(input))

  expect(results).toEqual(expectedOutputs)
}

const runTest = (testSubject, testCase) => {
  test(testCase.buildTestLabel(testSubject), () => {
    checkTestCase(testSubject, testCase)
  })
}

const runAllTests = (testSubjects, testCases) => {
  testCases.forEach(testCase => {
    const validTestSubjects = testSubjects.filter(subject =>
      testCase.targetScenarios.every(scenario =>
        subject.profileScenarios.includes(scenario))
    )

    validTestSubjects.forEach(subject => runTest(subject, testCase))
  })
}

runAllTests(testSubjects, testCases)
