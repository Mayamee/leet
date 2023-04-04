const lodash = require("lodash");

const comments = {
	1: { id: 1, taskId: 1, body: 'comment 1' },
	2: { id: 2, taskId: 1, body: 'comment 2' },
	3: { id: 3, taskId: 2, body: 'comment 3' },
};
console.log(lodash.omitBy(comments, (value, key) => {
	return key === "2";
}));