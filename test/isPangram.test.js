import isPangram from '../src/js/isPangram';

test('Определение Панаграмма верное', () => {
  expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBeTruthy();
});
