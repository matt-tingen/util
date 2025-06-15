import { AnyFunction, ExtractFunction } from './types';

export interface MemoizeCache<K extends unknown[], V> {
  has(args: K): boolean;
  get(args: K): V;
  set(args: K, value: V): void;
}

/**
 * Memoizes the provided function, using the provided cache.
 *
 * @example
 * ```ts
 * import isEqual from 'lodash/isEqual'
 * const getStats = memoize(
 *   (value: number) => expensiveCalculation(value),
 *   new FirstArgIdentityCache(),
 * );
 * ```

 * @param fn The function to memoize
 * @param cache The cache to use for memoization
 * @returns A memoized version of the provided function
 */

export const memoize =
  <F extends AnyFunction>(
    fn: F,
    cache: MemoizeCache<Parameters<F>, ReturnType<F>>,
  ): ExtractFunction<F> =>
  (...args) => {
    if (!cache.has(args)) {
      const freshResult = fn(...args);

      cache.set(args, freshResult as ReturnType<F>);
    }

    return cache.get(args);
  };
