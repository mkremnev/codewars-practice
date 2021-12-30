import { DNAStrand } from '../src/js/DNAStrand';

describe('Testing DNAStandard', () => {
  [
    ['AAAA', 'TTTT'],
    ['ATTGC', 'TAACG'],
    ['GTAT', 'CATA'],
  ].forEach(([input, output]) => {
    it(`Should return ${output} for ${input}`, () => {
      expect(DNAStrand(input)).toBe(output);
    });
  });
});
