/**
 * Renames an asynchronously loaded module's export to `default`.
 *
 * This is useful for APIs like `React.lazy` which expect default exports.
 *
 * @example
 * ```tsx
 * // Foo.tsx
 * export const Foo = () => <div />
 *
 * // Bar.tsx
 * const LazyFoo = React.lazy(() =>
 *   asDefault(import('./Foo'), 'Foo'),
 * );
 * ```
 *
 * @param modulePromise The module promise
 * @param name The name of the export to rename
 * @returns A promise which resolves to an object which resembles a module with
 * a default export
 */
export const asDefault = async <Module, Name extends keyof Module>(
  modulePromise: Promise<Module>,
  name: Name,
): Promise<{ default: Module[Name] }> => {
  const module = await modulePromise;

  return { default: module[name] };
};
