function countTime(time: string): any {
  const [hh, mm] = time.split(':')
  let mp = 1
  if (hh === '??') mp *= 24
  else {
    if (hh[0] === '?') +hh[1] > 3 ? (mp *= 2) : (mp *= 3)
    if (hh[1] === '?') +hh[0] < 2 ? (mp *= 10) : (mp *= 4)
  }
  if (mm[0] === '?') mp *= 6
  if (mm[1] === '?') mp *= 10
  return mp
}
console.log(countTime('??:??'))
