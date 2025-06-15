import type { MemoizeCache } from '../memoize';

export class FirstArgIdentityCache<Args extends unknown[], V>
  implements MemoizeCache<Args, V>
{
  private map = new Map<unknown, unknown>();
  private weakMap = new WeakMap<object, unknown>();

  private getMap(key: unknown) {
    if (typeof key === 'object' && key !== null) {
      return this.weakMap as Map<unknown, unknown>;
    }

    return this.map;
  }

  get([key]: Args): V {
    return this.getMap(key).get(key) as V;
  }

  has([key]: Args): boolean {
    return this.getMap(key).has(key);
  }

  set([key]: Args, value: unknown): void {
    this.getMap(key).set(key, value);
  }

  delete([key]: Args): void {
    this.getMap(key).delete(key);
  }

  clear(): void {
    this.map.clear();
  }
}
