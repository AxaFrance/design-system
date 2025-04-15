import { Select } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Form/Select/Select",
  args: {
    value: "Lorem ipsum",
    label: "Label",
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    errorLabel: "",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps>;

const render = ({ onChange, ...args }: StoryProps) => (
  <div style={{ width: 300 }}>
    <Select onChange={onChange} {...args}>
      <option value="fun">For fun</option>
      <option value="work">For work</option>
      <option value="drink">For drink</option>
    </Select>
  </div>
);

export const SelectStory: Story = {
  name: "Select",
  render,
};

export const SelectErrorStory: Story = {
  name: "Select with Error",
  render,
  args: {
    error: "Titre du Message",
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "select" },
    },
  },
};

export const SelectDisabledStory: Story = {
  name: "Select disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire",
  },
};
