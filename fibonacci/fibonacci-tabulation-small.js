/**
 * Calculates the nth Fibonacci number.
 * Uses the tabulation pattern.
 * The array only contains the two last calculated values.
 * Time complexity: O(n)
 * Memory complexity: O(1)
 */

const fib = (n) => {
  if (n < 0) return undefined
  n = Math.floor(n)
  if (n < 2) return n

  const fibNums = [1, 1]
  for (let round = 2; round < n; round++) {
    [fibNums[0], fibNums[1]] = [fibNums[1], fibNums[0] + fibNums[1]]
  }

  return fibNums[1]
}

module.exports = {
  fun: fib,
  id: 'tabulation small array'
}
