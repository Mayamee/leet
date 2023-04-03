// Immer
const map1 = { foo: 1, bar: 2 }
const map2 = produce(map1, draft => {
    draft.foo += 10
})
const { foo, bar } = map2
console.log(foo) // 11
console.log(map1.bar === bar) // true