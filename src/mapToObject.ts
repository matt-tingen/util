function mapToObject<T, V>(
  items: T[],
  iteree: (item: T) => [any, V],
): { [k: string]: V } {
  const pairs = items.map(iteree)
  const result: { [k: string]: V } = {}

  pairs.forEach(([key, value]) => {
    result[key.toString()] = value
  })

  return result
}

export default mapToObject
