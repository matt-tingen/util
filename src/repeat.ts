import { NonFunction } from './types';

export function repeat<T>(value: (i: number) => T, repeats: number): T[];
export function repeat<T>(value: NonFunction<T>, repeats: number): T[];

export function repeat<T>(
  value: ((i: number) => T) | NonFunction<T>,
  repeats: number,
): T[] {
  const array: T[] = [];

  for (let i = 0; i < repeats; i++) {
    array.push(
      typeof value === 'function' ? (value as (i: number) => T)(i) : value,
    );
  }

  return array;
}
