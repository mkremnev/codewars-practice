import { anagrams } from '../src/js/anagrams';

describe('Anagrams', function () {
  it('should return a list of all anagrams', function () {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
    expect(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
  });

  it('should return an empty array for no anagrams', function () {
    expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([]);
  });
});
