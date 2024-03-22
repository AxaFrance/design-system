import { RadioItem, RadioItemOption } from "./RadioItem";

export enum RadioModes {
  classic = "classic",
  default = "default",
  inline = "inline",
}

type Props = {
  name: string;
  value: string;
  options: RadioItemOption[];
  mode?: keyof typeof RadioModes;
  disabled?: boolean;
  erroneous?: boolean;
  onChange: React.ChangeEventHandler;
};

const baseClassNameMode = "af-form-client__radio";

const getContainerClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return `${baseClassNameMode}-container`;
    case RadioModes.inline:
      return `${baseClassNameMode}-container-inline`;
    default:
      return `${baseClassNameMode}-container-custom`;
  }
};

const getItemClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case RadioModes.classic:
      return baseClassNameMode;
    case RadioModes.inline:
      return `${baseClassNameMode}-inline`;
    default:
      return `${baseClassNameMode}-custom`;
  }
};

const Radio = ({
  name,
  options,
  value,
  disabled,
  erroneous,
  mode = RadioModes.classic,
  onChange,
  ...otherProps
}: Props) => (
  <div className={getContainerClassNameMode(mode)}>
    {options.map((option) => (
      <RadioItem
        {...otherProps}
        {...option}
        onChange={onChange}
        key={option.value}
        className={getItemClassNameMode(mode)}
        checked={option.value === value}
        name={name}
        disabled={option.disabled || disabled}
        erroneous={option.erroneous || erroneous}
      />
    ))}
  </div>
);

Radio.displayName = "EnhancedInputRadio";

export { Radio };
