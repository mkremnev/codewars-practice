import persistence from '../src/js/persistentBugger';

describe.skip('Testing function persistence', () => {
  it('Positive test', () => {
    expect(persistence(39).toBe(3));
    expect(persistence(39).not.toBe(undefined));
    expect(persistence(4).toBe(0));
  });
  it('Negative test', () => {
    expect(persistence(-1).toBe(0));
  });
});
