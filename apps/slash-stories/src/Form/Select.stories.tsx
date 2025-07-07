import { Select } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ComponentProps } from "react";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Form/Input/Select",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps>;

export const SelectStory: Story = {
  name: "Select",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }: ComponentProps<typeof Select>) => (
    <Select onChange={onChange} {...args} />
  ),
  args: {
    mode: "default",
    className: "",
    options,
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
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

export const SelectStoryWithChildren: Story = {
  ...SelectStory,
  name: "Select With Children",
  render: ({ onChange, ...args }: ComponentProps<typeof Select>) => (
    <Select onChange={onChange} {...args}>
      <optgroup label="Groupe 1">
        <option>Option 1</option>
        <option>Option 2</option>
      </optgroup>
      <optgroup label="Groupe 2">
        <option>Option 3</option>
        <option>Option 4</option>
      </optgroup>
    </Select>
  ),
  args: {
    mode: "default",
    className: "",
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
  },
};
