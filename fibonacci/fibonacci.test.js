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
  }
}

const bigFiboNums = {
  buildTestLabel: (testSubject) =>
    `${testSubject.id} fib(n) calculates big fibonacci numbers`,

  io: {
    inputs: [20, 40, 50],
    expectedOutputs: [6_765, 63_245_986, 12_586_269_025]
  }
}

const scenarios = [firstFiboNums, bigFiboNums]

const checkScenario = (testSubject, scenario) => {
  const inputs = scenario.io.inputs
  const expectedOutputs = scenario.io.expectedOutputs
  const results = inputs.map(input => testSubject.fun(input))

  expect(results).toEqual(expectedOutputs)
}

const runTest = (testSubject, scenario) => {
  test(scenario.buildTestLabel(testSubject), () => {
    checkScenario(testSubject, scenario)
  })
}

scenarios.forEach(
  scenario => testSubjects.forEach(
    subject => runTest(subject, scenario))
)
