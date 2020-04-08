const arithmetic = require('../src/js/arithmetic');

test('Решение верное', () => {
  expect(arithmetic(1, 2, 'add')).toBe(3);
  expect(arithmetic(8, 2, 'subtract')).toBe(6);
  expect(arithmetic(5, 2, 'multiply')).toBe(10);
  expect(arithmetic(8, 2, 'divide')).toBe(4);
});
