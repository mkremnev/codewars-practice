import sumDigits from'../src/js/sumDigits';

test('Решение верное', () => {
  expect(sumDigits(10)).toBe(1);
  expect(sumDigits(99)).toBe(18);
  expect(sumDigits(-32)).toBe(5);
});
