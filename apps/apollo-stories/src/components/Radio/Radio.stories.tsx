import { Radio } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useRef } from "react";

const argsDefault = {
  name: "option1",
  value: "option1",
};

const argTypesDefault = {
  name: {
    control: { type: "text" },
  },
  value: {
    control: { type: "text" },
  },
  checked: {
    control: { type: "boolean" },
  },
  onChange: { action: "onChange" },
  "aria-invalid": { type: "boolean" },
} as const;

const meta: Meta = {
  title: "Components/Form/Radio/Radio",
  component: Radio,
  argTypes: argTypesDefault,
  args: argsDefault,
};

export default meta;

const renderFocus = ({ ...args }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus?.();
  }, []);

  return <Radio {...args} ref={ref} />;
};

export const RadioStory: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Radio",
};

export const RadioStoryFocus: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Radio focus",
  render: renderFocus,
};

export const RadioStoryChecked: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Radio Checked",
  args: {
    ...argsDefault,
    checked: true,
  },
};

export const RadioStoryError: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Radio Error",
  args: {
    ...argsDefault,
    "aria-invalid": true,
  },
};

export const RadioStoryErrorFocus: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Radio Error focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    "aria-invalid": true,
  },
};
