const fib = (n) => n < 3 ? 1 : fib(n - 1) + fib(n - 2)

module.exports = {
  fun: fib,
  id: 'recursive minimal'
}
