class DoubleLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    // Делаем новый узел головой
    const newNode = new DoubleLinkedListNode(value, this.head);

    // Если есть голова, добавляем ей в предшествующую ноду текущую
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    // Если нет хвоста, этот узел будет и хвостом
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new DoubleLinkedListNode(value);

    // Если нет головы, этот узел будет головой
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Присоеденяем новый узел к концу
    // Добавляем ссылку на предыдущий элемент в новую ноду
    // Делаем новую ноду хвостом
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // Если голова должна быть удалена
          // Устанавливаем голову на следующий узел
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // Если хвост должен быть удален
          // Устанавливаем хвост на предыдущий узел
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          // Удаление центральных (не голова и не хвост) нод
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    // Перебираем список с головы, первое найденное значение возвращаем
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  toArray() {
    const result = [];

    if (!this.head) {
      return result;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value !== undefined) {
        result.push(currentNode.value);
      }

      currentNode = currentNode.next;
    }

    return result;
  }
}

const getDoubleLinkedList = (collection) => {
  const linkedList = new DoubleLinkedList();
  for (const item of collection) {
    linkedList.append(item);
  }

  return linkedList;
};
const shiftNode = (doubleLinkedList) => {
  const list = doubleLinkedList;
  let { head, tail } = list;
  if (head === null) {
    return null;
  }
  const { value } = head;
  if (head.next === null || tail.previous === null) {
    head = null;
    tail = null;
    list.head = head;
    list.tail = tail;
    return value;
  }
  head = head.next;
  head.previous = null;
  list.head = head;
  return value;
};
const unshiftNode = (value, doubleLinkedList) => {
  const list = doubleLinkedList;
  let { head, tail } = list;
  const newNode = new DoubleLinkedListNode(value, head, null);
  if (head === null || tail === null) {
    head = newNode;
    tail = newNode;
  } else {
    head.previous = newNode;
    tail.previous = head;
  }
  list.head = newNode;
  list.tail = tail;
};
