import "@axa-fr/design-system-slash-css/dist/Form/Choice/Choice.scss";
import { forwardRef, useId, type ComponentProps } from "react";
import { Radio } from "../Radio";
import { useOptionsWithId, type Option } from "../core";

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

type Props = Omit<ComponentProps<typeof Radio>, "options"> & {
  id: string;
  name?: string;
  options?: Array<Omit<Option, "value"> & { value: boolean }>;
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
