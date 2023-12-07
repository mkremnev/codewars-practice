import { isInteresting } from '../src/js/isInteresting';

describe('Basic inputs', function () {
  it('should work, dangit!', function () {
    expect(isInteresting(3, [1337, 256])).toEqual(0);
    expect(isInteresting(1336, [1337, 256])).toEqual(1);
    expect(isInteresting(1337, [1337, 256])).toEqual(2);
    expect(isInteresting(11208, [1337, 256])).toEqual(0);
    expect(isInteresting(11209, [1337, 256])).toEqual(1);
    expect(isInteresting(11211, [1337, 256])).toEqual(2);
  });
});
