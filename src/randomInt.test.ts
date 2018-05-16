import test, { Macro, TestContext } from 'ava';
import randomInt from './randomInt';

const REPEATS = 1000;

const testRange: Macro<TestContext> = (
  t: TestContext,
  min: number | null,
  max: number,
  expected: number[]
) => {
  let omitMin = false;

  if (min === null) {
    omitMin = true;
    min = 0;
  }

  const set = new Set<number>();

  for (let i = 0; i < REPEATS; i++) {
    const value = omitMin ? randomInt(max) : randomInt(min, max);
    set.add(value);
  }

  const values = Array.from(set.values());
  values.sort();

  t.deepEqual(values, expected);
};
testRange.title = (providedTitle, min, max, omitMin) =>
  `randomInt produces values in the range [${min || 0}, ${max}]${
    min === null ? ' with omitted min' : ''
  }`;

test(testRange, 0, 3, [0, 1, 2, 3]);
test(testRange, 0, 0, [0]);
test(testRange, null, 2, [0, 1, 2]);
test(testRange, 0.1, 4.9, [1, 2, 3, 4]);
test(testRange, -0.1, 1, [0, 1]);
