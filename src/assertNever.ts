export const assertNever = (value: never): never => {
  throw new Error(`Expected never: ${value}`);
};
