export type Permutations<
  T extends string,
  U extends string = T,
> = T extends unknown ? T | `${T} ${Permutations<Exclude<U, T>>}` : never;
