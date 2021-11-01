/**
 * Calculates the nth Fibonacci number.
 * Uses the tabulation pattern.
 * Time complexity: O(n)
 * Memory complexity: O(n)
 * @param {Number} n Target Fibonacci number (non-negative)
 * @returns The nth Fibonacci number
 */
const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)

  const fibNums = Array(n + 1).fill(0)
  fibNums[1] = 1

  for (let index = 0; index <= n; index++) {
    fibNums[index + 1] += fibNums[index]
    fibNums[index + 2] += fibNums[index]
  }

  return fibNums[n]
}

module.exports = {
  fun: fib,
  id: 'tabulation'
}
