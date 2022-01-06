import { findND } from '../src/js/findND';

describe('Testing findND', () => {
  [
    [4183059834009, 2022],
    [24723578342962, -1],
    [135440716410000, 4824],
    [40539911473216, 3568],
  ].forEach(([m, n]) => {
    it(`should return ${n} for ${m}`, () => {
      expect(findND(m)).toBe(n);
    });
  });
});
