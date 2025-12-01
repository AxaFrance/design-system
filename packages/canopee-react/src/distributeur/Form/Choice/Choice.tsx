import { forwardRef, useId, type ComponentProps } from "react";
import { Radio } from "../Radio";
import { useOptionsWithId, type Option } from "../core";

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

type Props = Omit<ComponentProps<typeof Radio>, "options" | "value"> & {
  id: string;
  name?: string;
  options?: Array<Omit<Option, "value"> & { value: boolean }>;
  value?: boolean | string;
  classModifier?: string;
};

const Choice = forwardRef<HTMLInputElement, Props>(
  (
    { children, value, options = defaultOptions, name, ...otherProps },
    inputRef,
  ) => {
    const choiceOptions = useOptionsWithId(
      options.map((o) => ({
        ...o,
        value: `${o.value}`,
      })),
    );

    const generatedId = useId();
    return (
      <Radio
        {...otherProps}
        mode="default"
        ref={inputRef}
        name={name ?? `choice_${generatedId}`}
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
