import { Dropdown, itemMessageVariants } from "@axa-fr/canopee-react/client";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const options = [
  {
    label: "For fun",
    value: "fun",
  },
  {
    label: "For work",
    value: "work",
  },
  {
    label: "For drink",
    value: "drink",
  },
];

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Components/Form/Input/Dropdown",
  args: {
    value: "Lorem ipsum",
    description: "Description",
    label: "Label",
    disabled: false,
    required: true,
    placeholder: "Placeholder",
    buttonLabel: "En savoir plus",
    error: "",
    helper: "Information complémentaires",
    message: "",
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      control: { type: "select" },
      options: ["", ...options.map((option) => option.value)],
    },
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
};

export default meta;

type StoryProps = ComponentProps<typeof Dropdown>;
type Story = StoryObj<StoryProps> & { required?: boolean };

const render = (args: StoryProps) => (
  <div style={{ width: 300 }}>
    <Dropdown {...args}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Dropdown>
  </div>
);

export const DropdownStory: Story = {
  name: "Playground",
  render,
};
