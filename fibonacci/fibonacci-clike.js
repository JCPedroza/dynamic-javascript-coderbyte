/**
 * Calculates the nth Fibonacci number.
 * Uses a for loop and three variables, one of which is a buffer
 * variable.
 * Time complexity: O(n)
 * Memory complexity: O(1)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns {Number} The nth Fibonacci number
 */
function fib (n) {
  if (n < 0) return undefined
  n = Math.floor(n)

  let current = 0
  let next = 1

  for (let count = 0; count < n; count++) {
    const buffer = next
    next += current
    current = buffer
  }

  return current
}

module.exports = {
  fun: fib,
  id: 'clike'
}
