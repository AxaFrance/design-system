import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Select } from "./Select";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Slash/Components/Form/Input/Select",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps>;

export const SelectStory: Story = {
  name: "Select",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => <Select onChange={onChange} {...args} />,
  args: {
    mode: "default",
    className: "",
    options,
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["default", "base"],
      },
    },
  },
};
