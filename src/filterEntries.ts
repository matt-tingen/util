// eslint-disable-next-line @typescript-eslint/ban-types
export const filterEntries = <T extends {}>(
  collection: T,
  iteree: (value: T[keyof T], key: keyof T) => boolean,
): Partial<T> =>
  Object.fromEntries(
    Object.entries(collection).filter(([key, value]) =>
      iteree(value as T[keyof T], key as keyof T),
    ),
  ) as Partial<T>;
