function reverseBits(n: number): any {
  return Number(Array.from(String(n).padStart(32, '0')).reverse().join(''))
}
console.log(reverseBits(11111111111111111111111111111101))
