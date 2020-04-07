const domainName = require('../src/js/domainName');

test('Парсинг верный', () => {
  expect(domainName('http://google.com')).toMatch(/google/);
  expect(domainName('http://google.co.jp')).toMatch(/google/);
  expect(domainName('www.xakep.ru')).toMatch(/xakep/);
  expect(domainName('https://youtube.com')).toMatch(/youtube/);
});
