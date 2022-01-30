import mapToObject from './mapToObject';

describe('mapToObject', () => {
  it('handles identity', () => {
    expect(mapToObject([1, 2, 3], (value) => [value, value])).toEqual({
      1: 1,
      2: 2,
      3: 3,
    });
  });

  it('handles index', () => {
    expect(mapToObject([1, 2, 3], (value, i) => [i, value])).toEqual({
      0: 1,
      1: 2,
      2: 3,
    });
  });
});
