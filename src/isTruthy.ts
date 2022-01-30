import { Falsy } from './types';

/**
 * @param value
 * @returns Whether the provided value is truthy
 */
export const isTruthy = <T>(value: T | Falsy): value is T => Boolean(value);
