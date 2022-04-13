import { spinWords } from '../src/js/spinWords';

describe('Spinning words', () => {
  it('Fixed tests', () => {
    expect(spinWords('Welcome')).toBe('emocleW');
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
    expect(spinWords('This is a test')).toBe('This is a test');
    expect(spinWords('This is another test')).toBe('This is rehtona test');
    expect(spinWords('This sentence is a sentence')).toBe('This ecnetnes is a ecnetnes');
    expect(spinWords('You are almost to the last test')).toBe('You are tsomla to the last test');
    expect(spinWords('Just kidding there is still one more')).toBe('Just gniddik ereht is llits one more');
    expect(spinWords('Seriously this is the last one')).toBe('ylsuoireS this is the last one');
  });

  it('Random tests', () => {
    const refSpinWords = (s) =>
      s
        .split(' ')
        .map((s) => (s.length >= 5 ? s.split('').reverse().join('') : s))
        .join(' ');
    const rnd = (n) => Math.floor(Math.random() * n);
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const rndWord = () => Array.from({ length: rnd(12) + 1 }, () => abc[rnd(abc.length)]).join('');
    const rndSentence = (i) => Array.from({ length: rnd(i) }, rndWord).join(' ');
    for (let i = 1; i <= 50; i++) {
      const s = rndSentence(i);
      expect(spinWords(s)).toBe(refSpinWords(s));
    }
  });
});
