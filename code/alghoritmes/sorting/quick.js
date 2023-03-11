const quickSort = (elems, direction = 'asc') => {
  const elemsLength = elems.length
  if (elemsLength === 0) {
    return []
  } // Экономим

  const index = Math.trunc(elemsLength / 2)
  const element = elems[index]

  const smallerElems = []
  const biggerElems = []

  for (let i = 0; i < elemsLength; i += 1) {
    if (i === index) {
      // eslint-disable-next-line no-continue
      continue
    }
    const currentElement = elems[i]
    if (currentElement < element) {
      smallerElems.push(currentElement)
    } else {
      biggerElems.push(currentElement)
    }
  }

  const sortedSmallerElems = quickSort(smallerElems, direction)
  const sortedBiggerElems = quickSort(biggerElems, direction)

  if (direction === 'asc') {
    return [...sortedSmallerElems, element, ...sortedBiggerElems]
  }
  return [...sortedBiggerElems, element, ...sortedSmallerElems]
}

export default quickSort

const arr1 = [2, 1]

quicksort(arr1, 'asc')
console.log(arr1)
