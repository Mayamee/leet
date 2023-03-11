const binSearchCreator = (extractor) => (book, searchItem) => {
  let start = 0
  let end = book.length - 1
  let mid
  let item
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    item = extractor(book[mid])
    if (item === searchItem) {
      return mid
    }
    if (item < searchItem) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}
const phoneSearch = (book, name) => {
  if (book.length === 0) {
    return 'Phonebook is empty!'
  }
  const result = binSearchCreator((item) => item.name)(book, name)
  if (result === -1) {
    return 'Name not found!'
  }
  return book[result].number
}
export default phoneSearch
