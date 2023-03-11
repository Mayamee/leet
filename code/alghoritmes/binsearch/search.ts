const extBinSearch = <TSearchElem, TArrayElem>(
  element: TSearchElem,
  arr: TArrayElem[],
  extractor: (elem: TArrayElem) => TSearchElem
): number => {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)
  while (left <= right) {
    if (element === extractor(arr[middle])) {
      return middle
    } else if (element > extractor(arr[middle])) {
      left = middle + 1
    } else {
      right = middle - 1
    }
    middle = Math.floor((left + right) / 2)
  }
  return -1
}

const test_data = [
  { name: 'Berlin', year: 1234 },
  { name: 'Hamburg', year: 234 },
  { name: 'Munich', year: 1123 },
  { name: 'Cologne', year: 3728 },
  { name: 'Frankfurt', year: 4954 },
  { name: 'Stuttgart', year: 112 },
  { name: 'Dusseldorf', year: 1 },
  { name: 'Dortmund', year: 3 },
]
const sorted_data = test_data.sort((a, b) => a.year - b.year)
const index = extBinSearch('Dortmund', sorted_data, (elem) => elem.name)
console.log(sorted_data[index].year) // 3
