export const clampIndex = (index: number, total: number): number => {
  if (total <= 0) return 0;
  if (index < 0) return 0;
  if (index >= total) return total - 1;
  return index;
};
