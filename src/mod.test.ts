import { mod } from './mod';

const testMod = createMacro(
  (dividend: number, divisor: number, expected: number) => {
    expect(mod(dividend, divisor)).toBe(expected);
  },
  (hint, dividend, divisor, expected) =>
    hint || `${dividend} mod ${divisor} = ${expected}`,
);

run(testMod, 0, 0, NaN);
run(testMod, 1, 0, NaN);
run(testMod, -1, 0, NaN);

run(testMod, 0, 1, 0);
run(testMod, 0, -1, 0);

run(testMod, 1, 1, 0);
run(testMod, -1, 1, 0);
run(testMod, 1, -1, 0);
run(testMod, -1, -1, 0);

run(testMod, 5, 5, 0);
run(testMod, -5, 5, 0);
run(testMod, 5, -5, 0);
run(testMod, -5, -5, 0);

run(testMod, 7, 3, 1);
run(testMod, -7, 3, 2);
run(testMod, 7, -3, -2);
run(testMod, -7, -3, -1);
