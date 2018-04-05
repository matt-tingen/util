import identity from './identity';

function countBy<T>(items: T[], by: (value: T) => any = identity) {
  const counts: { [value: string]: number } = {};

  items.forEach(item => {
    const value = by(item);

    if (!counts[value]) {
      counts[value] = 0;
    }

    counts[value]++;
  });

  return counts;
}

export default countBy;
