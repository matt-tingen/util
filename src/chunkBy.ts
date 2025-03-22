/**
 * Splits the provided items into "chunks" or runs of elements which produce the
 * same value when passed to the iteree.
 *
 * @example
 * ```ts
 * const value = chunkBy(
 *   ['foo', 'bar', 'qwerty', '123456', 'baz'],
 *   str => str.length
 * )
 * // Returns: [['foo', 'bar'], ['qwerty', '123456'], ['baz']]
 * ```
 *
 * @param items The items to chunk
 * @param iteree How runs are identified
 * @returns
 */
export const chunkBy = <T>(items: T[], iteree: (item: T) => unknown): T[][] => {
  const chunks: T[][] = [];
  let chunkValue: unknown;

  items.forEach((item, i) => {
    const value = iteree(item);

    if (value !== chunkValue || i === 0) {
      chunks.push([]);
      chunkValue = value;
    }

    const chunk = chunks.at(-1)!;

    chunk.push(item);
  });

  return chunks;
};
