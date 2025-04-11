import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Checkbox } from "@axa-fr/design-system-apollo-react/lf";

const meta: Meta = {
  title: "Components/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export default meta;

export const CheckboxStory: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Checkbox",

  render: ({ ...args }) => <Checkbox {...args} />,
  args: {
    name: "option1",
    value: "option1",
    checked: true,
    errorMessage: "",
  },
  argTypes: {
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
    onChange: { action: "onChange" },
  },
};
