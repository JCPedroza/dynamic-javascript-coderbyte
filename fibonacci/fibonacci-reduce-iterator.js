/**
 * Calculates the nth Fibonacci number.
 * Uses reduce as iterator, without using the values of the reduced
 * array.
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns {Number} The nth Fibonacci number
 */
const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)

  return [...Array(n)].reduce(([a, b]) => [b, a + b], [0, 1])[0]
}

module.exports = {
  fun: fib,
  id: 'reduce iterator',
  profileScenarios: ['micro', 'small', 'medium', 'large', 'giant']
}
