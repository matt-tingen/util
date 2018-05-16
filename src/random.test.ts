import test, { Macro, TestContext } from 'ava';
import random from './random';

const REPEATS = 1000;

const testRandom: Macro<TestContext> = (
  t: TestContext,
  min: number | null,
  max: number
) => {
  let omitMin = false;

  if (min === null) {
    omitMin = true;
    min = 0;
  }

  for (let i = 0; i < REPEATS; i++) {
    const value = omitMin ? random(max) : random(min, max);
    t.true(value >= min);
    t.true(value < max);
  }
};
testRandom.title = (providedTitle, min, max, omitMin) =>
  `random produces values in the range [${min || 0}, ${max})${
    min === null ? ' with omitted min' : ''
  }`;

test(testRandom, 1.1, 1.2);
test(testRandom, 8.5, 10);
test(testRandom, 0, 10.8);
test(testRandom, null, 0.2);
test(testRandom, null, 10);
test(testRandom, null, 10.8);
