/**
 * Ensures a value conforms to a given type.
 *
 * The expected type has to be partially applied to due a TypeScript limitation.
 *
 * @see https://github.com/Microsoft/TypeScript/pull/26349
 * @see https://github.com/microsoft/TypeScript/issues/7481
 * @see https://github.com/microsoft/TypeScript/issues/47920
 *
 * @returns the provided value
 */
export const verifyType =
  <T>() =>
  <U extends T>(value: U): U =>
    value;
