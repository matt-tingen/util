import identity from './identity';

function countBy<T>(items: T[], iteree: (value: T) => any = identity) {
  const counts: { [value: string]: number } = {};

  items.forEach(item => {
    const value = iteree(item);

    if (!counts[value]) {
      counts[value] = 0;
    }

    counts[value]++;
  });

  return counts;
}

export default countBy;
