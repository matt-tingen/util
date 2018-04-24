import test, { Macro, TestContext } from 'ava'
import flattenDeep from './flattenDeep'

const testFlattenDeep: Macro<TestContext> = <T>(
  t: TestContext,
  values: T[],
  expected: ReturnType<typeof flattenDeep>,
) => {
  t.deepEqual(flattenDeep(values), expected)
}
testFlattenDeep.title = providedTitle => `flattenDeep handles ${providedTitle}`

test('empty array', testFlattenDeep, [], [])
test('flat array', testFlattenDeep, [1, 2, 3], [1, 2, 3])
test('stepped array', testFlattenDeep, [1, [2, [3, 4]]], [1, 2, 3, 4])
test('deep arrays', testFlattenDeep, [[[1, 2]], [[3, 4]]], [1, 2, 3, 4])
test('deep array', testFlattenDeep, [[[[[[[1, 2]]]]]]], [1, 2])
