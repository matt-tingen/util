export const typedKeys = Object.keys as <T>(obj: T) => (keyof T)[];
