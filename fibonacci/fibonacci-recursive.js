/**
 * Calculates the nth Fibonacci number.
 * Uses the recursion pattern.
 * Time complexity: O(2^n)
 * Memory complexity: O(n) (number of levels of the recursion tree)
 */

const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)

  const fibRecursion = (n) => {
    if (n < 2) return n
    return fibRecursion(n - 1) + fibRecursion(n - 2)
  }

  return fibRecursion(n)
}

module.exports = {
  fun: fib,
  id: 'recursive'
}
