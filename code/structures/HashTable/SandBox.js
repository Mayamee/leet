class TableInDistributionArray {
  list = []
  set(key, value) {
    this.list[key] = value
  }
  get(key) {
    return this.list[key]
  }
}

class CompressedDistributionTable {
  list = []
  compressIndex = 20
  recalculateIndex(newIndex) {
    // compressindex - старый индекс сжатия массива
    // newIndex - новый индекс сжатия массива
    const newList = []
    const transformCoefficient = this.compressIndex / newIndex
		// коефициент трансформации индекса при изменении индекса сжатия массива
    for (let i = 0; i < this.list.length; i += 1) {
      newList[Math.floor(i * transformCoefficient)] = this.list[i]
    }
    this.list = newList
    this.compressIndex = newIndex
  }
  setCompressIndex(index) {
    if (this.list.length === 0) {
      this.compressIndex = index
      return
    }
    this.recalculateIndex(index)
  }
  set(key, value) {
    this.list[Math.floor(key / this.compressIndex)] = value
  }
  get(key) {
    return this.list[Math.floor(key / this.compressIndex)]
  }
}
