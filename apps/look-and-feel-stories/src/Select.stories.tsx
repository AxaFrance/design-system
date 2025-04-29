import { Select } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Form/Input/Select",
};

export default meta;

type StoryProps = ComponentProps<typeof Select>;
type Story = StoryObj<StoryProps> & { required?: boolean };

export const SelectStory: Story = {
  name: "Select",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <div style={{ width: 300 }}>
      <Select onChange={onChange} {...args}>
        <option value="fun">
          For funnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
        </option>
        <option value="work">For work</option>
        <option value="drink">For drink</option>
      </Select>
    </div>
  ),
  args: {
    label: "Label",
    disabled: false,
    required: false,
    placeholder: "Placeholder",
    error: "",
    value: "",
    description: "Description Text",
    sideButtonLabel: "Side Button",
    buttonLabel: "ButtonLabel",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};
