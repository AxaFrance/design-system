import "@axa-fr/design-system-css/dist/Form/Choice/Choice.agent.scss";
import { ComponentPropsWithoutRef } from "react";
import { Radio } from "../Radio/Agent";
import type { Option } from "../core";

const defaultOptions = [
  { label: "Oui", value: true, id: "radioItemTrue" },
  { label: "Non", value: false, id: "radioItemFalse" },
];

type Props = Omit<ComponentPropsWithoutRef<typeof Radio>, "options"> & {
  id: string;
  options?: Array<Omit<Option, "value"> & { value: boolean }>;
};

const Choice = ({
  children,
  value,
  options = defaultOptions,
  ...otherProps
}: Props) => {
  const choiceOptions = options.map((option) => ({
    ...option,
    value: `${option.value}`,
  }));
  return (
    <Radio {...otherProps} value={value?.toString()} options={choiceOptions}>
      {children}
    </Radio>
  );
};

Choice.displayName = "Choice";

export { Choice };
