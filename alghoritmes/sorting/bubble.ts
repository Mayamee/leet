/*
* Пузырьковая сортировка.
*	Это название произошло от ассоциации с воздухом в воде: на дне пузырьки совсем маленькие,
*	но постепенно поднимаются к поверхности, собирают кислород и увеличиваются.
*/
function bubbleSort<T>([...arr]: T[]) { // неглубокое копирование массива для сохранения порядка в старом
  const swap = (idx1: number, idx2: number, arr: T[]): void => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let limit = arr.length - 1; limit > 0; limit--) {
    for (let index = 0; index < limit; index++) {
      if (arr[index] > arr[index + 1]) swap(index, index + 1, arr);
    }
  }
  return arr;
}
const arr = [9, 10, 1, 2, 6, 4, 2, 1, 3, 4, 6, 7, 8, 1];
console.log(bubbleSort(arr));
