/**
 * Functionally identical to `Object.keys` but with narrower types.
 *
 * Should only be used on objects which are true `Record`s--that is all the keys
 * represented in the type are present in the object.
 *
 * @see Object.keys
 */
export const typedKeys = Object.keys as <T>(obj: T) => (keyof T)[];
