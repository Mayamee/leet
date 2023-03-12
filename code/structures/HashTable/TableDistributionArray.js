export class TableInDistributionArray {
  list = []
  set(key, value) {
    this.list[key] = value
  }
  get(key) {
    return this.list[key]
  }
}
