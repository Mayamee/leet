function reverseArray<T>([...arr]: T[]): T[] {
  const swap = <T>(idx1: number, idx2: number, arr: T[]): void => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    swap(left, right, arr)
    left++
    right--
  }
  return arr
}
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reverseArray(arr2))
