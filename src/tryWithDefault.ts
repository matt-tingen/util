/**
 * @param getValue A value getter
 * @param defaultValue The fallback value in case the getter throws
 * @returns The result of `getValue` if it succeeds, otherwise `defaultValue`
 */
export const tryWithDefault = <T, U>(
  getValue: () => T,
  defaultValue: U,
): T | U => {
  try {
    return getValue();
  } catch {
    return defaultValue;
  }
};
