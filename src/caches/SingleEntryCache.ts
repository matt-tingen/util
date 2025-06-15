import type { MemoizeCache } from '../memoize';
import { Comparator } from '../types';

const defaultComparator: Comparator<unknown[]> = (a, b) =>
  a.length === b.length && a.every((value, i) => Object.is(value, b[i]));

export class SingleEntryCache<Args extends unknown[], Return>
  implements MemoizeCache<Args, Return>
{
  private lastArgs: Args | undefined;
  private lastReturn: Return | undefined;

  private compare: Comparator<Args>;

  constructor(compare: Comparator<Args> = defaultComparator) {
    this.compare = compare;
  }

  has(args: Args): boolean {
    return !!this.lastArgs && this.compare(args, this.lastArgs);
  }

  get(): Return {
    return this.lastReturn as Return;
  }

  set(args: Args, value: Return): void {
    this.lastArgs = args;
    this.lastReturn = value;
  }
}
