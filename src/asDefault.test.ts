import { asDefault } from './asDefault';

it('renames the export', async () => {
  const value = {};
  const module = { value };

  const result = await asDefault(Promise.resolve(module), 'value');

  expect(result).toEqual({ default: value });
  expect(result.default).toBe(value);
});
