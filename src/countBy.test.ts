import test, { Macro, TestContext } from 'ava'
import countBy from './countBy'

const testCountBy: Macro<TestContext> = <T>(
  t: TestContext,
  values: T[],
  iteree: (value: T) => any,
  expected: ReturnType<typeof countBy>,
) => {
  t.deepEqual(countBy(values, iteree), expected)
}
testCountBy.title = providedTitle => `countBy handles ${providedTitle}`

test('empty array', testCountBy, [], undefined, {})
test(
  'string => string',
  testCountBy,
  ['apple', 'beta', 'alphabet'],
  (str: string) => str.slice(0, 1),
  {
    a: 2,
    b: 1,
  },
)
test(
  'string => number',
  testCountBy,
  ['', 'a', 'b', 'abc'],
  (str: string) => str.length,
  {
    0: 1,
    1: 2,
    3: 1,
  },
)
test(
  'number => boolean',
  testCountBy,
  [1, 2, 3, 5],
  (num: number) => num >= 2,
  {
    false: 1,
    true: 3,
  },
)
