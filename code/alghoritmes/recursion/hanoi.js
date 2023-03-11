const hanoiSolve = (height, from, to) => {
  if (height >= 1) {
    hanoiSolve(height - 1, from, 6 - from - to)
    console.log(`Move disk from ${from} to ${to}`)
    hanoiSolve(height - 1, 6 - from - to, to)
  }
}
console.log(hanoiSolve(3, 1, 3))
