/**
 * Calculates the nth Fibonacci number.
 * Uses the recursion pattern.
 * Code golf version, aims to use few characters.
 * Time complexity: O(2^n)
 * Space complexity: O(n) (number of levels of the recursion tree)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns The nth Fibonacci number
 */
const fib = (n) =>
  (n = Math.floor(n)) >= 0 ? n < 2 ? n : fib(n - 1) + fib(n - 2) : undefined

module.exports = {
  fun: fib,
  id: 'recursive minimal',
  // too slow for large and giant
  profileScenarios: ['micro', 'small', 'medium']
}
