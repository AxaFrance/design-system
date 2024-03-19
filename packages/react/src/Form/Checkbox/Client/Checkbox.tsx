import { CheckboxItem, CheckboxItemOption } from "./CheckboxItem";

export enum CheckboxModes {
  classic = "classic",
  default = "default",
  inline = "inline",
}

type Props = {
  name: string;
  values: string[];
  options: CheckboxItemOption[];
  mode?: keyof typeof CheckboxModes;
  disabled?: boolean;
  erroneous?: boolean;
  onChange: React.ChangeEventHandler;
};

const baseClassNameMode = "af-form-client__checkbox";

const getContainerClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case CheckboxModes.classic:
      return `${baseClassNameMode}-container`;
    case CheckboxModes.inline:
      return `${baseClassNameMode}-container-inline`;
    default:
      return `${baseClassNameMode}-container-custom`;
  }
};

const getItemClassNameMode = (mode: Props["mode"]) => {
  switch (mode) {
    case CheckboxModes.classic:
      return baseClassNameMode;
    case CheckboxModes.inline:
      return `${baseClassNameMode}-inline`;
    default:
      return `${baseClassNameMode}-custom`;
  }
};

export const Checkbox = ({
  name,
  options,
  values,
  disabled,
  erroneous,
  mode = CheckboxModes.classic,
  onChange,
  ...otherProps
}: Props) => (
  <div className={getContainerClassNameMode(mode)}>
    {options.map((option) => (
      <CheckboxItem
        {...otherProps}
        {...option}
        onChange={onChange}
        key={option.value}
        className={getItemClassNameMode(mode)}
        checked={values ? values.indexOf(option.value) >= 0 : false}
        name={name}
        disabled={option.disabled || disabled}
        erroneous={option.erroneous || erroneous}
      />
    ))}
  </div>
);
