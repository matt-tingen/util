import { AnyKey } from './types';

/**
 * Maps an array of items to an object.
 *
 * @param items
 * @param iteree An iteree which returns an entry pair
 * @returns An object composed of the created entries
 */
export const mapToObject = <T, V, K extends AnyKey>(
  items: T[],
  iteree: (item: T, index: number) => [K, V],
): Record<K, V> => {
  const pairs = items.map(iteree);
  const result = {} as Record<K, V>;

  pairs.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
};
