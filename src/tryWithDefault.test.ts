import { tryWithDefault } from './tryWithDefault';

it("returns the getter's value", () => {
  const value = {};
  const getter = jest.fn().mockReturnValue(value);

  expect(tryWithDefault(getter, null)).toBe(value);
  expect(getter).toHaveBeenCalledTimes(1);
});

it('returns the default value when the getter throws', () => {
  const defaultValue = {};
  const getter = jest.fn(() => {
    throw new Error('oh oh');
  });

  expect(tryWithDefault(getter, defaultValue)).toBe(defaultValue);
  expect(getter).toHaveBeenCalledTimes(1);
});
