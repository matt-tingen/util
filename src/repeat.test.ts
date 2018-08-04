import test, { Macro, TestContext } from 'ava'
import repeat from './repeat'

const testRepeat: Macro<TestContext> = <T>(
  t: TestContext,
  value: T,
  numRepeats: number,
  expected: T[],
) => {
  t.deepEqual(repeat(value, numRepeats), expected)
}
testRepeat.title = providedTitle => `repeat handles ${providedTitle}`

test('zero items', testRepeat, 'test', 0, [])
test('string', testRepeat, 'a', 2, ['a', 'a'])
test('empty array', testRepeat, [], 2, [[], []])
test('number array', testRepeat, [0, 1], 3, [[0, 1], [0, 1], [0, 1]])
