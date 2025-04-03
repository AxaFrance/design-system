import { Toggle } from "@axa-fr/design-system-apollo-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from "react";

const ToggleStateWrapper = ({
  selected: initialSelected,
  ...args
}: Omit<React.ComponentProps<typeof Toggle>, "handleChange">) => {
  const [selected, setSelected] = useState(initialSelected);

  return <Toggle selected={selected} handleChange={setSelected} {...args} />;
};

export const renderToggle = (
  args: Omit<React.ComponentProps<typeof Toggle>, "handleChange">,
) => <ToggleStateWrapper key={`${args.selected}`} {...args} />;
