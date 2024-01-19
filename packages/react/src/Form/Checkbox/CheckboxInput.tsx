import { ComponentProps } from "react";

import { Field, useOptionsWithId } from "../core";
import { Checkbox } from "./Checkbox";
import { CheckboxModes } from "./CheckboxModes";

type Props = Omit<
  ComponentProps<typeof Checkbox> & ComponentProps<typeof Field>,
  "children" | "placeholder"
>;

const CheckboxInput = ({
  mode,
  messageType,
  message,
  classModifier,
  options,
  classNameContainerLabel,
  classNameContainerInput,
  label,
  isVisible,
  className,
  forceDisplayMessage,
  ...checkboxProps
}: Props) => {
  let rowModifier = classModifier;
  if (mode === CheckboxModes.classic) {
    rowModifier += " label-top";
  }
  const newOptions = useOptionsWithId(options);

  return (
    <Field
      label={label}
      id={newOptions[0].id}
      message={message}
      messageType={messageType}
      isVisible={isVisible}
      forceDisplayMessage={forceDisplayMessage}
      className={className}
      classModifier={rowModifier}
      classNameContainerLabel={classNameContainerLabel}
      classNameContainerInput={classNameContainerInput}
    >
      <Checkbox
        mode={mode}
        options={newOptions}
        classModifier={classModifier}
        {...checkboxProps}
      />
    </Field>
  );
};

export { CheckboxInput };
