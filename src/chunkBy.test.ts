import { chunkBy } from './chunkBy';

it('chunks the doc example', () => {
  const chunked = chunkBy(
    ['foo', 'bar', 'qwerty', '123456', 'baz'],
    (str) => str.length,
  );

  expect(chunked).toEqual([['foo', 'bar'], ['qwerty', '123456'], ['baz']]);
});
