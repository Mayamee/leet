function one(v) {
  if (typeof v === 'function') {
    return v(1);
  }
  return v;
}
function two(v) {
  if (typeof v === 'function') {
    return v(2);
  }
  return 2;
}
function three(v) {
  if (typeof v === 'function') {
    return v(3);
  }
  return 3;
}
const plus = (arg) => (a) => a + arg;
const minus = (arg) => (a) => a - arg;
console.log(one(plus(three((minus(two()))))));
