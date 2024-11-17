import { isNonNullish } from './isNonNullish';

const testIsNonNullish = createMacro(
  (value: unknown, expected: boolean) => {
    expect(isNonNullish(value)).toBe(expected);
  },
  (hint, value, expected) => `${value} is ${expected ? 'truthy' : 'falsy'}`,
);

run(testIsNonNullish, 0, true);
run(testIsNonNullish, '', true);
run(testIsNonNullish, undefined, false);
run(testIsNonNullish, null, false);
run(testIsNonNullish, false, true);
run(testIsNonNullish, NaN, true);

run('empty array', testIsNonNullish, [], true);
run('empty object', testIsNonNullish, {}, true);
run(testIsNonNullish, 1, true);
run(testIsNonNullish, 'a', true);

it('filters an array', () => {
  const mixed = [undefined, 'abc', null, 'def', ''];
  const filtered: string[] = mixed.filter(isNonNullish);

  expect(filtered).toEqual(['abc', 'def', '']);
});
