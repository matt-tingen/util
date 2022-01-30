import { isTruthy } from './isTruthy';

const testIsTruthy = createMacro(
  (value: unknown, expected: boolean) => {
    expect(isTruthy(value)).toBe(expected);
  },
  (hint, value, expected) => `${value} is ${expected ? 'truthy' : 'falsy'}`,
);

run(testIsTruthy, 0, false);
run(testIsTruthy, '', false);
run(testIsTruthy, undefined, false);
run(testIsTruthy, null, false);
run(testIsTruthy, false, false);
run(testIsTruthy, NaN, false);

run('empty array', testIsTruthy, [], true);
run('empty object', testIsTruthy, {}, true);
run(testIsTruthy, 1, true);
run(testIsTruthy, 'a', true);

it('filters an array', () => {
  const mixed = [undefined, 'abc', null, 'def', ''];
  const filtered: string[] = mixed.filter(isTruthy);

  expect(filtered).toEqual(['abc', 'def']);
});
