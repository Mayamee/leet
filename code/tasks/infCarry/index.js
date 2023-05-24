const carrySum = (v) => {
  let acc = 0;
  const sum = function (v) {
    acc += v;
    return sum;
  };
  sum.get = () => {
    console.log(acc);
  };
  return sum;
};

carrySum(10)(20)(30)(70)(80)(228).get();
