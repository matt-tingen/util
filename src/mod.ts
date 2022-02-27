const normalizeZero = (value: number) => (Object.is(value, -0) ? 0 : value);

export const mod = (dividend: number, divisor: number): number =>
  normalizeZero(((dividend % divisor) + divisor) % divisor);
