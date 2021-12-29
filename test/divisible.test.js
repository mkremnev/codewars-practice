import { isDivisible } from "../src/js/divisible";

describe("Divisible test", () => {
  [
    [3, 3, 4, false],
    [12, 3, 4, true],
    [8, 3, 4, false],
    [48, 3, 4, true],
  ].forEach(([n, x, y, result]) => {
    it(`should return ${result} for n=${n}, x=${x}, y=${y}`, () => {
      expect(isDivisible(n, x, y)).toBe(result);
    });
  });
});
