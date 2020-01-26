import test, { Macro, TestContext } from 'ava'
import repeat from './repeat'

const testRepeat: Macro<TestContext> = (
  t: TestContext,
  value: any,
  numRepeats: number,
  expected: any[],
) => {
  t.deepEqual(repeat(value, numRepeats), expected)
}
testRepeat.title = providedTitle => `repeat handles ${providedTitle}`

test('zero items', testRepeat, 'test', 0, [])
test('string', testRepeat, 'a', 2, ['a', 'a'])
test('empty array', testRepeat, [], 2, [[], []])
test('number array', testRepeat, [0, 1], 3, [[0, 1], [0, 1], [0, 1]])
test('function value', testRepeat, () => 'fn', 3, ['fn', 'fn', 'fn'])
test('function with argument', testRepeat, (i: number) => i, 3, [0, 1, 2])
