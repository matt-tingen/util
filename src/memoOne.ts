import { SingleEntryCache } from './caches/SingleEntryCache';
import { memoize } from './memoize';
import { AnyFunction, Comparator, ExtractFunction } from './types';

/**
 * Memoizes the provided function, caching only the latest return value.
 *
 * By default, the cached value will be returned if the number of arguments
 * matches the prior call and every argument is the same (with `Object.is`).
 *
 * @example
 * ```ts
 * const fetchStaticData = memoOne(() => fetch('...'))
 * ```
 *
 * @example
 * ```ts
 * import isEqual from 'lodash/isEqual'
 * const getStats = memoOne((values: number[]) => expensiveCalculation(values), isEqual)
 * ```

 * @param fn The function to memoize
 * @param compareParams A comparator which determines whether to return the
 * cached value
 * @returns A memoized version of the provided function
 */
export const memoOne = <F extends AnyFunction>(
  fn: F,
  compareParams?: Comparator<Parameters<F>>,
): ExtractFunction<F> => memoize(fn, new SingleEntryCache(compareParams));
