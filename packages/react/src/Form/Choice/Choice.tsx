import "@axa-fr/design-system-css/dist/Form/Choice/Choice.agent.scss";
import { forwardRef, type ComponentProps } from "react";
import { Radio } from "../Radio/Agent";
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
    const choiceOptions = options.map((option) => ({
      ...option,
      value: `${option.value}`,
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
