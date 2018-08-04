function repeat<T>(value: (i: number) => T, repeats: number): T[]
function repeat<T>(value: T, repeats: number): T[]
function repeat<T>(value: T, repeats: number): T[] {
  const array: T[] = []

  for (let i = 0; i < repeats; i++) {
    array.push(typeof value === 'function' ? value(i) : value)
  }

  return array
}

export default repeat
