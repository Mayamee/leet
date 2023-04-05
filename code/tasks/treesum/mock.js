var tree0 = {
  valueNode: 2,
  next: null,
};

var tree1 = {
  valueNode: 1,
  next: [
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
  ],
};

var tree2 = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null,
    },
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null,
        },
        {
          valueNode: 5,
          next: null,
        },
      ],
    },
  ],
};

var tree3 = {};

module.exports = {
  tree0,
  tree1,
  tree2,
	tree3,
};
