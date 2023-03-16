const getFirstWord = (str) => {
  let acc = ''
  const result = []
  let state = {
    line: 'outline', // outline inline
    word: 'outword', // inword outword
    isWordAdded: false,
  }
  for (let i = 0; i < str.length; i += 1) {
    const sym = str[i]

    switch (state.line) {
      case 'outline':
        if (sym === '\n') {
          state.line = 'outline'
          state.word = 'outword'
          break
        } else {
          state.line = 'inline'
          if (sym === ' ') {
            state.word = 'outword'
          } else {
            state.word = 'inword'
            acc += sym
          }
        }
        break
      case 'inline':
        switch (state.word) {
          case 'outword':
            if (sym === '\n') {
              state.line = 'outline'
							state.isWordAdded = false
              break
            }
            if (sym !== ' ') {
              state.word = 'inword'
              acc += sym
            }
            break
          case 'inword':
            if (sym === '\n') {
              state.line = 'outline'
              state.word = 'outword'
							if(!state.isWordAdded) result.push(acc)
							state.isWordAdded = false
							acc = ''
              break
            }
            if (sym === ' ') {
              state.word = 'outword'
              if (!state.isWordAdded) result.push(acc)
              state.isWordAdded = true
              acc = ''
              break
            }
            acc += sym
						if (i === str.length - 1) {
							if (!state.isWordAdded) result.push(acc)
							state.isWordAdded = false
							state.word = 'outword'
							state.line = 'outline'
							acc = ''
						}
            break
          default:
            break
        }
        break
      default:
        break
    }
  }
  return result
}

const test = "\n\nhi\nhi \n hello"
const result = getFirstWord(test)
console.log(result)
