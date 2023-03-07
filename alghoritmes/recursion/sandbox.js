const fnc = (from, to) => {
  if (to <= from) {
    return from;
  }
  return to + fnc(from, to - 1);
};
console.log(fnc(0,100));
