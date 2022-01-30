import { Falsy } from './types';

export const isTruthy = <T>(value: T | Falsy): value is T => Boolean(value);
