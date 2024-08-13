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
  title: "Look-and-feel/Components/Form/Input/Select",
};

export default meta;

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps> & { required?: boolean };

export const SelectStory: Story = {
  name: "Select",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <div style={{ width: 300 }}>
      <Select onChange={onChange} {...args} />
    </div>
  ),
  args: {
    className: "",
    options,
    label: "Label",
    id: "nameid",
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    noOptionsMessage: "Pas d'option",
    errorLabel: "",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};
