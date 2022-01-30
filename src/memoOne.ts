import { AnyFunction, Comparator } from './types';

const defaultComparator: Comparator<unknown[]> = (a, b) =>
  a.length === b.length && a.every((value, i) => Object.is(value, b[i]));

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
  compareParams: Comparator<Parameters<F>> = defaultComparator,
): ((...args: Parameters<F>) => ReturnType<F>) => {
  let lastArgs: Parameters<F>;
  let lastReturn: ReturnType<F>;

  return (...args: Parameters<F>) => {
    if (!lastArgs || !compareParams(args, lastArgs)) {
      lastArgs = args;
      lastReturn = fn(...args) as ReturnType<F>;
    }

    return lastReturn;
  };
};
