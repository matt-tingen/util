function repeat<T>(value: T, repeats: number): T[] {
  const array: T[] = []

  for (let i = 0; i < repeats; i++) {
    array.push(value)
  }

  return array
}

export default repeat
