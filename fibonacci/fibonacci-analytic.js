/**
 * Calculates the nth Fibonacci numbers.
 * Uses an analytic approach through Binet formula, high
 * values of n can produce incorrect results because of floating-point
 * imprecission.
 * Time complexity: O(log n) (because of exponentiation)
 * Memory complexity: O(1)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns The nth Fibonacci number
 */
const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)
  if (n < 2) return n

  const sqrt5 = Math.sqrt(5)
  const p = (sqrt5 + 1) / 2
  const q = 1 / p

  return Math.floor((p ** n + q ** n) / sqrt5 + 0.5)
}

module.exports = {
  fun: fib,
  id: 'analytic'
}
