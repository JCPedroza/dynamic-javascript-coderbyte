/**
 * Calculates the nth Fibonacci number.
 * Uses the recursion pattern.
 * Code golf version, uses fewer characters.
 * Time complexity: O(2^n)
 * Memory complexity: O(n) (number of levels of the recursion tree)
 */

const fib = (n) =>
  (n = Math.floor(n)) >= 0 ? n < 2 ? n : fib(n - 1) + fib(n - 2) : undefined

module.exports = {
  fun: fib,
  id: 'recursive minimal'
}
