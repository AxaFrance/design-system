import { Dispatch, SetStateAction } from "react";

export type ToggleProps = {
  selected: boolean;
  handleChange?: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  ariaLabel?: string;
};

export const Toggle = ({
  selected,
  handleChange,
  disabled,
  ariaLabel,
}: ToggleProps) => {
  const onChange =
    typeof handleChange === "function"
      ? () => {
          handleChange((previousSelected) => !previousSelected);
        }
      : undefined;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="af-toggle">
      <div className="af-toggle__root">
        <span className="af-toggle__handle" />
      </div>
      <input
        type="checkbox"
        checked={selected}
        onChange={onChange}
        disabled={disabled}
        aria-label={ariaLabel}
      />
    </label>
  );
};
