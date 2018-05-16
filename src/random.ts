function random(min: number, max: number): number;
function random(max: number): number;
function random(min: number, max?: number): number {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.random() * (max - min) + min;
}

export default random;
