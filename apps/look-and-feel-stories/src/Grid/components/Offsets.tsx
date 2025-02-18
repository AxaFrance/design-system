const MAX_OFFSET = 12;

export const Offsets = () =>
  [...Array(MAX_OFFSET).keys()].map((start) => {
    const offset = start + 1;
    const maxCols = MAX_OFFSET - offset + 1;
    return [...Array(maxCols).keys()].map((col) => (
      <div
        key={crypto.randomUUID()}
        className={`box box-offset box-offset-${offset}-${col + 1}`}
      />
    ));
  });
