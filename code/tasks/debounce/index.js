const debounce = (fn, interval = 2000) => {
  let flag = false;
  return (...args) => {
    if (flag) return;
    flag = true;
    setTimeout(() => (flag = false), interval);
    return fn(...args);
  };
};

const mp = debounce((v) => 15 * v, 1000);

console.log(mp(10));
console.log(mp(10));
console.log(mp(10));
console.log(mp(10));
console.log(mp(10));
setTimeout(() => {
  console.log(mp(10));
}, 5000);
