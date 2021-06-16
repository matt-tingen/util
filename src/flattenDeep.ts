import { DeepArray } from './types';

function flattenDeep<T>(array: DeepArray<T>): T[] {
  const flattened: T[] = [];

  array.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...flattenDeep(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}

export default flattenDeep;
