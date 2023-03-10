const getGcd = (a, b) => {
  if (a === b) return a;
  return a > b ? getGcd(a - b, b) : getGcd(a, b - a);
};

console.log(getGcd(23, 10)); // 1
