const isPrime = (n) => {
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
// Метод перебора
// Тут мы перебираем все числа до корня из N и если хоть 1 число
// разделит без остатка это число то оно не является простым

console.log(isPrime(7))
