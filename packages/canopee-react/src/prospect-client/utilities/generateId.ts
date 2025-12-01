let counter = 1;

const map = new WeakMap<object, number>();

export const generateId = (item: object): string => {
  if (!map.has(item)) {
    map.set(item, counter);
    counter += 1;

    return generateId(item);
  }

  return `id-${map.get(item)}`;
};
