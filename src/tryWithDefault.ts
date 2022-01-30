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
