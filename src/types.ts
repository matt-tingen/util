export type Dict<T> = Partial<Record<string, T>>;
export type Falsy = false | undefined | null | 0 | '';

export type AnyKey = keyof never;
export type AnyObject = Record<AnyKey, unknown>;
export type AnyFunction = (...args: never[]) => unknown;

export type MaybePromise<T> = T | Promise<T>;
export type MaybeArray<T> = T | T[];
export type MaybeFalsy<T> = T | Falsy;

export type SomeRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type SomePartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type ArrayElement<T extends readonly unknown[]> = T[number];

export type Comparator<T> = (a: T, b: T) => boolean;

export type NonFunction<T> = T extends AnyFunction ? never : T;
