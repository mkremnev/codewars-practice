import toWeirdCase from '../src/js/toWeirdCase';

test('Парсинг верный', () => {
  expect(toWeirdCase('Weird string case')).toMatch(/WeIrD StRiNg CaSe/);
  expect(toWeirdCase('String')).toMatch(/StRiNg/);
});
