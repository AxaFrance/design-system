import "@axa-fr/design-system-slash-css/dist/Form/Choice/Choice.scss";
import { forwardRef, useId, type ComponentProps } from "react";
import { Radio } from "../Radio";
import type { Option } from "../core";

const defaultOptions = [
  { label: "Oui", value: true, id: "radioItemTrue" },
  { label: "Non", value: false, id: "radioItemFalse" },
];

type Props = Omit<ComponentProps<typeof Radio>, "options"> & {
  id: string;
  options?: Array<Omit<Option, "value"> & { value: boolean }>;
};

const Choice = forwardRef<HTMLInputElement, Props>(
  ({ children, value, options = defaultOptions, ...otherProps }, inputRef) => {
    const id = useId();
    const choiceOptions = options.map((option) => ({
      ...option,
      value: `${option.value}`,
      id: `${id}-${option.value}${option.id}`, // Ensure unique ID for each option
    }));
    return (
      <Radio
        {...otherProps}
        ref={inputRef}
        value={value?.toString()}
        options={choiceOptions}
      >
        {children}
      </Radio>
    );
  },
);

Choice.displayName = "Choice";

export { Choice };
