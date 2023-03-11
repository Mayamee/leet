class Stack<T> {
  stack: T[] = []
  isEmpty() {
    return this.stack.length === 0
  }
  pop() {
    return this.stack.pop()
  }
  push(...values: T[]) {
    return this.stack.push(...values)
  }
}

const stack = new Stack<number>()

const solvePolandNotation = (expression: string) => {
  if (expression.length === 0) return 0
  const lexems = expression.split(' ')
  const stack = new Stack<number>()
  let a: number, b: number
  for (const lexem of lexems) {
    switch (lexem) {
      case '+':
        a = stack.pop() as number
        b = stack.pop() as number
        stack.push(a + b)
        break
      case '-':
        b = stack.pop() as number
        a = stack.pop() as number
        stack.push(a - b)
        break
      case '*':
        b = stack.pop() as number
        a = stack.pop() as number
        stack.push(a * b)
        break
      case '/':
        b = stack.pop() as number
        a = stack.pop() as number
        stack.push(a / b)
        break
      default:
        stack.push(parseFloat(lexem))
        break
    }
  }
  return stack.pop()
}
console.log(solvePolandNotation('4 5 / 7 8 * *'))
