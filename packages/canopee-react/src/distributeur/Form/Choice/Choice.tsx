import { useId, type ComponentPropsWithRef } from "react";
import { Radio } from "../Radio";
import { useOptionsWithId, type Option } from "../core";

const defaultOptions = [
  { label: "Oui", value: true },
  { label: "Non", value: false },
];

type Props = Omit<ComponentPropsWithRef<typeof Radio>, "options" | "value"> & {
  id: string;
  name?: string;
  options?: Array<Omit<Option, "value"> & { value: boolean }>;
  value?: boolean | string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

const Choice = ({
  children,
  value,
  options = defaultOptions,
  name,
  ...otherProps
}: Props) => {
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
      name={name ?? `choice_${generatedId}`}
      value={value?.toString()}
      options={choiceOptions}
    >
      {children}
    </Radio>
  );
};

Choice.displayName = "Choice";

export { Choice };
