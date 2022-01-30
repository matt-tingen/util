import { repeat } from './repeat';

const testRepeat = createMacro(
  (value: unknown, numRepeats: number, expected: unknown[]) => {
    expect(repeat(value, numRepeats)).toEqual(expected);
  },
  (hint) => `repeat handles ${hint}`,
);

run('zero items', testRepeat, 'test', 0, []);
run('string', testRepeat, 'a', 2, ['a', 'a']);
run('empty array', testRepeat, [], 2, [[], []]);
run('number array', testRepeat, [0, 1], 3, [
  [0, 1],
  [0, 1],
  [0, 1],
]);
run('function value', testRepeat, () => 'fn', 3, ['fn', 'fn', 'fn']);
run('function with argument', testRepeat, (i: number) => i, 3, [0, 1, 2]);
