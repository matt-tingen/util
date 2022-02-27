/**
 * Ensures a value conforms to--and widens its type to--a given type.
 *
 * @deprecated See `verifyType`
 * @param value
 * @returns the provided value
 */
export const expectType = <T>(value: T): T => value;
