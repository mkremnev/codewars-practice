/**
 * Any digit followed by all zeros: 100, 90000
 * Every digit is the same number: 1111
 * The digits are sequential, incementing†: 1234
 * The digits are sequential, decrementing‡: 4321
 * The digits are a palindrome: 1221 or 73837
 * The digits match one of the values in the awesomePhrases array
 * // "boring" numbers
 * isInteresting(3, [1337, 256]);    // 0
 * isInteresting(3236, [1337, 256]); // 0
 *
 * // progress as we near an "interesting" number
 * isInteresting(11207, []); // 0
 * isInteresting(11208, []); // 0
 * isInteresting(11209, []); // 1
 * isInteresting(11210, []); // 1
 * isInteresting(11211, []); // 2
 *
 * // nearing a provided "awesome phrase"
 * isInteresting(1335, [1337, 256]); // 1
 * isInteresting(1336, [1337, 256]); // 1
 * isInteresting(1337, [1337, 256]); // 2
 */

const isZero = (number) => {
  if (typeof number === 'number') {
    return !!number
      .toString()
      .split('')
      .reduce((a, b) => a + b, 0);
  }

  return false;
};

export const isInteresting = (number, awesomePhrases) => {
  return 0;
};
