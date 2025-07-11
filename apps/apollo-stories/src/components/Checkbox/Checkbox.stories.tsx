import { Checkbox } from "@axa-fr/design-system-apollo-react";
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
} as const;

const meta: Meta = {
  title: "Components/Form/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: argTypesDefault,
  args: argsDefault,
};

export default meta;

const renderFocus = ({ ...args }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref?.current?.focus?.();
  }, []);

  return <Checkbox {...args} ref={ref} />;
};

export const CheckboxStory: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Checkbox",
};

export const CheckboxStoryFocus: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Checkbox focus",
  render: renderFocus,
};

export const CheckboxStoryChecked: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Checkbox Checked",
  args: {
    ...argsDefault,
    checked: true,
  },
};

export const CheckboxStoryError: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Checkbox Error",
  args: {
    ...argsDefault,
    hasError: true,
  },
};

export const CheckboxStoryErrorFocus: StoryObj<
  ComponentProps<typeof Checkbox>
> = {
  name: "Checkbox Error focus",
  render: renderFocus,
  args: {
    ...argsDefault,
    hasError: true,
  },
};
