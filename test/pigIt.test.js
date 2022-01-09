import { pigIt } from '../src/js/pigIt';

describe('Tests pigIt', () => {
  it('test', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    expect(pigIt('This is my string')).toBe('hisTay siay ymay tringsay');
  });
});
