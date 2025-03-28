type ToggleProps = {
  selected?: boolean;
};

export const Toggle = ({ selected }: ToggleProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="af-toggle">
      <span className="af-toggle__handle" />
      <input type="checkbox" checked={selected} />
    </label>
  );
};
