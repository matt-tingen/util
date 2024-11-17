/**
 * @param value
 * @returns Whether the provided value is non-nullish
 */
export const isNonNullish = <T>(value: T | null | undefined): value is T =>
  value != null;
