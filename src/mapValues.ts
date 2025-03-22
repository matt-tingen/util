export const mapValues = <T extends object, V>(
  object: T,
  iteree: (value: T[keyof T], key: keyof T) => V,
): Record<keyof T, V> => {
  const mapped = Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      key,
      iteree(value as T[keyof T], key as keyof T),
    ]),
  );

  return mapped as Record<keyof T, V>;
};
