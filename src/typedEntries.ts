/**
 * Functionally identical to `Object.entries` but with narrower types.
 *
 * Should only be used on objects which are true `Record`s--that is all the keys
 * represented in the type are present in the object.
 *
 * @see Object.entries
 */
export const typedEntries = Object.entries as <T>(
  obj: T,
) => [keyof T, T[keyof T]][];
