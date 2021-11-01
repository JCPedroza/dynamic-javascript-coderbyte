/**
 * Calculates the nth Fibonacci number.
 * Uses the recursion and memoization patterns.
 * Time complexity: O(n)
 * Memory complexity: O(n) (number of levels of the recursion tree)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns The nth Fibonacci number
 */
const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)

  const fibRecursion = (n, memo = { 0: 0, 1: 1 }) => {
    if (n in memo) return memo[n]
    memo[n] = fibRecursion(n - 1, memo) + fibRecursion(n - 2, memo)
    return memo[n]
  }

  return fibRecursion(n)
}

module.exports = {
  fun: fib,
  id: 'recursive memoization'
}
