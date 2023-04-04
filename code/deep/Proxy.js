// Задача дан объект, мы в него записываем свойства в виде чисел
// и при доступе к этим свойствам мы хотим получать их квадраты

let target = {};
let proxy = new Proxy(target, {}); // пустой handler

proxy.test = 5; // записываем в прокси (1)
console.log(target.test); // 5, свойство появилось в target!

console.log(proxy.test); // 5, мы также можем прочитать его из прокси (2)

for (let key in proxy) console.log(key); // test, итерация работает (3)

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // значение по умолчанию
    }
  },
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // 0 (нет такого элемента)

