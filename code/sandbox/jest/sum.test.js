const sum = require('./sum.js');

test('add 1 + 2 is equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('kek', () => {
  expect(sum(1, 3)).not.toBe(2);
});
