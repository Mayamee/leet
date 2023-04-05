const { tree2, tree0, tree1, tree3 } = require('./mock');

const getSum = (tree) => {
  let acc = 0;
  Object.values(tree).forEach((v) => {
    if (Array.isArray(v)) {
      v.forEach((vv) => {
        acc += getSum(vv);
      });
    } else {
      acc += v;
    }
  });
  return acc;
};

const drillTreeSum = (tree) => {
  const VB = (t) =>
    Object.values(t).map((v) => {
      if (Array.isArray(v)) {
        return v.map((vv) => VB(vv));
      } else if (v === Object(v)) {
        return Object.entries(v);
      } else {
        return v;
      }
    });
  return VB(tree)
    .flat(Infinity)
    .reduce((acc, cur) => {
      if (cur !== null) {
        acc += cur;
      }
      return acc;
    }, 0);
};

const queueTreeSum = (tree) => {
  let acc = 0; // накопитель суммы
  let current = null; // указатель на текущую ветку дерева
  let arr = [tree]; // помещаем дерево в очередь,
  //далее будем туда складывать вложенные элементы
  while (arr.length > 0) {
    // пока очередь не пуста
    current = arr.shift(); // берем элемент из очереди и обрабатываем его
    acc += current.valueNode;
    if (current.next !== null) {
      // если в него еще что то вложено
      // вид такой [{v, n}, {v, n}, {v, n}]
      // мы заполняем очередь этими элементами
      for (let i = 0; i < current.next.length; i++) {
        arr.push(current.next[i]);
      }
    }
  }
  return acc;
};

const stackTreeSum = (tree) => {
  let acc = 0; // накопитель суммы
  let current = null; // указатель на текущую ветку дерева
  let arr = [tree]; // помещаем дерево в стек,
  //далее будем туда складывать вложенные элементы
  while (arr.length > 0) {
    // пока стек не пустой
    current = arr.pop(); // берем элемент из стека и обрабатываем его
    acc += current.valueNode;
    if (current.next !== null) {
      // если в него еще что то вложено
      // вид такой [{v, n}, {v, n}, {v, n}]
      // мы заполняем стек этими элементами
      for (let i = 0; i < current.next.length; i++) {
        arr.push(current.next[i]);
      }
    }
  }
  return acc;
};

const JSONCringeSum = (tree) =>
  (JSON.stringify(tree).match(/(?<=\:)\d+(?=\,)/g) || []).reduce((a, c) => a + +c, 0);

module.exports = {
  getSum,
  drillTreeSum,
  queueTreeSum,
  stackTreeSum,
};
