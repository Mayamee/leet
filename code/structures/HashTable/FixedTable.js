export class FixedTable {
  // Массив из 100 элементов содержит связанные списки
  // Ключи это целые числа которые закольцовываются в индексы от 0 до 100 и добавляются в связанные списки
  // Это позволяет избежать коллизий при добавлении
  // Структура связанный список была выбрана по отношению к массиву
  // по причине отсутствия нужды получения доступа по O(1)
  // и большой нужды при динамическом добавлении элементов c O(1)
  // кольцевание индексов нужно для сберегания оперативной памяти при обработке данных
  list = new Array(100)
  setElement = (key, value) => {
    let index = key % this.list.length
    if (typeof this.list[index] === 'undefined') {
      this.list[index] = new LinkedList()
    }
    this.list[index].append({ key, value })
  }
  getElement = (key) => {
    let index = key % this.list.length
    if (typeof this.list[index] === undefined) {
      return undefined
    }
    const acc = new LinkedList()
    for (const pair of this.list[index].getIterator()) {
      if (pair.key === key) {
        acc.append(pair.value)
      }
    }
    return acc.toArray()
  }
}
