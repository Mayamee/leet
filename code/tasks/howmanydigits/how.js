const solution = (n) => {
  let count = 0
  for (let i = 1; i < n; i += 1) {
    count += i.toString().length
  }
  return count
}
console.log(solution(2021));
