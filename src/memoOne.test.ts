import { memoOne } from './memoOne';

it('caches a single value', () => {
  const getValue = jest.fn().mockReturnValue(42);
  const memoized = memoOne(getValue);

  expect(memoized()).toBe(42);
  expect(memoized()).toBe(42);
  expect(getValue).toHaveBeenCalledTimes(1);
});

it('invalidates cache when args change', () => {
  const double = jest.fn((value: number) => value * 2);
  const memoized = memoOne(double);

  expect(memoized(10)).toBe(20);
  expect(memoized(10)).toBe(20);
  expect(double).toHaveBeenCalledTimes(1);

  expect(memoized(5)).toBe(10);
  expect(memoized(5)).toBe(10);
  expect(double).toHaveBeenCalledTimes(2);

  expect(memoized(10)).toBe(20);
  expect(double).toHaveBeenCalledTimes(3);
});

it('uses provided param comparator', () => {
  const concat = jest.fn((left: string, right: string) => left + right);
  const memoized = memoOne(
    concat,
    ([a, b], [c, d]) => a.length === c.length && b.length === d.length,
  );

  expect(memoized('a', 'b')).toBe('ab');
  expect(memoized('c', 'd')).toBe('ab');
  expect(concat).toHaveBeenCalledTimes(1);

  expect(memoized('e', 'fg')).toBe('efg');
  expect(concat).toHaveBeenCalledTimes(2);
});

it('does not copy props from the provided function', () => {
  const identity = Object.assign((value: number) => value, { foo: 42 });
  const memoized = memoOne(identity);

  // @ts-expect-error -- assertion
  void memoized.foo;

  expect(memoized).not.toHaveProperty('foo');
});
