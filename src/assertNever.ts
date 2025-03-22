export const assertNever = (value: never): never => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  throw new Error(`Expected never: ${value}`);
};
