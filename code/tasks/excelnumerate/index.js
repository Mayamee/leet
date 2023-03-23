const solution = (num) => {
  let result = ''
  while (num > 0) {
    const idx = (num - 1) % 26
    result = `${String.fromCharCode(65 + idx)}${result}`
    num = Math.trunc((num - 1) / 26)
  }
  return result
}

const solution2 = (num) => {
  const convertDecToBase = (dec, base) => {
    if (base === 1) return null
    const acc = []
    while (dec > 0) {
      acc.unshift(dec % base)
      dec = Math.floor(dec / base)
    }
    return acc
  }
  return convertDecToBase(num, 26)
    .map((n) => String.fromCharCode(64 + n))
    .join('')
}
const testdata = [11123, 1123, 345, 4567, 523]

for (const data of testdata) {
	console.log(solution(data))
	console.log(solution2(data))
}