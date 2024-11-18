export class DefaultMap<K, T> extends Map<K, T> {
  constructor(private defaultGetter: (key: K) => T, items?: readonly [K, T][]) {
    super(items);
  }

  override get(key: K): T {
    if (!this.has(key)) {
      this.set(key, this.defaultGetter(key));
    }

    return super.get(key) as T;
  }
}
