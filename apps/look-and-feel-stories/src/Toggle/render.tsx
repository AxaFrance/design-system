/* eslint-disable import/no-extraneous-dependencies */
import { Toggle } from "@axa-fr/design-system-apollo-react/lf";
import { useState } from "react";

const ToggleStateWrapper = ({
  initialSelected,
  ...args
}: {
  initialSelected: boolean;
} & Omit<React.ComponentProps<typeof Toggle>, "selected" | "handleChange">) => {
  const [selected, setSelected] = useState(initialSelected);

  return <Toggle selected={selected} handleChange={setSelected} {...args} />;
};

export const renderToggle = ({
  selected,
  ...args
}: Omit<React.ComponentProps<typeof Toggle>, "handleChange">) => (
  <ToggleStateWrapper
    key={`${selected}`}
    initialSelected={selected}
    {...args}
  />
);
