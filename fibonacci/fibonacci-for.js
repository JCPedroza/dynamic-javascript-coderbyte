const fib = (n) => {
  const fibNums = [1, 1] // [last, current]

  for (let index = 2; index < n; index++) {
    [fibNums[0], fibNums[1]] = [fibNums[1], fibNums[0] + fibNums[1]]
  }

  return fibNums.pop()
}

module.exports = {
  fun: fib,
  id: 'for loop'
}
