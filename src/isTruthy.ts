import { Falsy } from './types';

/**
 * @param value
 * @returns Whether the provided value is truthy
 */
// eslint-disable-next-line unicorn/prefer-native-coercion-functions
export const isTruthy = <T>(value: T | Falsy): value is T => Boolean(value);
