class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    }
    return this;
  } // Добавляет элемент в начало списка
  append(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  delete(value) {
    if (this.head === null) {
      return null;
    }
    let deletedNode = null;
    // Проверяем с головы какие ноды надо удалить
    while (this.head !== null && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next; // операция удаления, ссылка на старую голову в списке теряется
    }
    let currentNode = this.head;
    // Если у головы не нашли, проверяем остальные значения в списке
    if (currentNode !== null) {
      while (currentNode.next !== null) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    // Проверяе хвост
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }
  find(value) {
    if (this.head === null) {
      return;
    }
    let currentNode = this.head;
    // Перебираем с головы
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  isEmpty() {
    return this.head === null && this.tail === null;
  }
  toArray() {
    const result = [];
    if (this.head === null) return result;
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}