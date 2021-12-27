const findOdd = require('../src/js/findOdd');

it('Вхождения найдены правильно', () => {
  expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toBe(5);
  expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toMatchSnapshot();
  expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
  expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toBe(5);
  expect(findOdd([10])).toBe(10);
  expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toBe(10);
  expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toBe(1);
});

it('Random tests', function () {
  var i, sz, a, j, n;
  for (i = 0; i < 40; ++i) {
    sz = Math.round(Math.random() * 1000 + 50);
    if (!sz % 2) {
      ++sz;
    }
    a = [];
    for (j = 0; j < sz - 1; j += 2) {
      n = Math.round(Math.random() * 1000);
      a.push(n);
      a.push(n);
    }
    n = Math.round(Math.random() * 1000);
    a.push(n);
    expect(findOdd(a)).toBe(n);
    expect(findOdd(a)).toMatchSnapshot();
  }
});
