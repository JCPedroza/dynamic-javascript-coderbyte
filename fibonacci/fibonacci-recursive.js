const fib = (n) => {
  if (n < 3) return 1
  return fib(n - 1) + fib(n - 2)
}

module.exports = {
  fun: fib,
  id: 'recursive'
}
