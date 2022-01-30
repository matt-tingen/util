import { AnyKey } from './types';

function mapToObject<T, V, K extends AnyKey>(
  items: T[],
  iteree: (item: T, index: number) => [K, V],
): Record<K, V> {
  const pairs = items.map(iteree);
  const result = {} as Record<K, V>;

  pairs.forEach(([key, value]) => {
    result[key] = value;
  });

  return result;
}

export default mapToObject;
