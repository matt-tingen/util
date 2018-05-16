import random from './random';

function randomInt(min: number, max: number): number;
function randomInt(max: number): number;
function randomInt(min: number, max?: number): number {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  // For random, the upper bound is exclusive. For randomInt, it is inclusive.
  const value = random(min, max + 1);

  return Math.floor(value);
}

export default randomInt;
