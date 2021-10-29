const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n < 3) return 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

module.exports = {
  fun: fib,
  id: 'recursive memoization'
}
