const getWordsFrom = (text) => {
  const result = []
  // before, inside, after - состояния автомата
  let state = 'before'
  let word = []
  Array.from(text).forEach((symbol) => {
    switch (state) {
      case 'before': // перед словом
        if (symbol !== ' ' && symbol !== '\n') { 
          state = 'inside' // переходим в состояние внутри слова
          word.push(symbol) // добавляем символ в слово
        }
        break
      case 'inside': // внутри слова
        if (symbol === ' ' || symbol === '\n') {
          result.push(word.join('')) // добавляем слово в результат
          word = [] // очищаем слово
          state = symbol === ' ' ? 'after' : 'before' // переходим в состояние после слова или перед словом в зависимости от символа
        } else {
          word.push(symbol) // если символ не пробел и не перенос строки, то добавляем его в слово
        }
        break
      case 'after': // после слова
        if (symbol === '\n') { // если символ перенос строки, то переходим в состояние перед словом
          state = 'before'
        }
        break
      default:
        throw new Error(`Unexpected state '${state}'`)
    }
  })

  if (word.length > 0) { // если в конце текста осталось слово, то добавляем его в результат
    result.push(word.join('')) // добавляем слово в результат
  }

  return result
}
