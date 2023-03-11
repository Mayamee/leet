import { DoubleLinkedList } from './DoubleLinkedList/DoubleLinkedList'

class Queue {
  list = new DoubleLinkedList()
  pop() {
    return this.list.popBegin()
  }
  push(value) {
    return this.list.append(value)
  }
  isEmpty() {
    return this.list.head === null
  }
}
