import test, { Macro, TestContext } from 'ava'
import mapToObject from './mapToObject'

const testMapToObject: Macro<TestContext> = <T, V>(
  t: TestContext,
  values: T[],
  iteree: (value: T) => [any, V],
  expected: ReturnType<typeof mapToObject>,
) => {
  t.deepEqual(mapToObject(values, iteree), expected)
}
testMapToObject.title = providedTitle => `mapToObject handles ${providedTitle}`

test('identity', testMapToObject, [1, 2, 3], value => [value, value], {
  1: 1,
  2: 2,
  3: 3,
})
test('index', testMapToObject, [1, 2, 3], (value, i) => [i, value], {
  0: 1,
  1: 2,
  2: 3,
})
