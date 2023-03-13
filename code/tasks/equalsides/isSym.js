const findEvenIndex = (arr) => {
  const isSymmetricSum = (index, [...arr]) => {
    let acc = 0
    for (let i = 0; i < index; i += 1) {
      acc += arr[i]
    }
    for (let i = arr.length - 1; i > index; i -= 1) {
      acc -= arr[i]
    }
    return acc === 0
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (isSymmetricSum(i, arr)) {
      return i
    }
  }
  return -1
}

const arr1 = [20, 10, -80, 10, 10, 15, 35]
console.log(findEvenIndex(arr1))
