const obj = {
  a: {
    b: [
      1,
      2,
      3,
      4,
      {
        c: '10',
        d: (val) => 10 * val,
      },
    ],
  },
};

const isPrimitive = (v) => {
  return Object(v) !== v;
};

const getByPath = (obj, path) => {
  if (path.length === 0) {
    return null;
  }
  const pathArr = path.replace(/\[\d+\]/g, (founded) => '.' + founded.slice(1, -1)).split('.');
  let subObject = obj;
  for (let i = 0; i < pathArr.length; i += 1) {
    const subPath = pathArr[i];
    const newVal = subObject[subPath];
    if (isPrimitive(newVal) && i === pathArr.length - 2) {
      return null;
    }
    subObject = newVal;
    if (!subObject) return null;
  }
  return subObject;
};
console.log(getByPath(obj, 'a.b[4].c'));
