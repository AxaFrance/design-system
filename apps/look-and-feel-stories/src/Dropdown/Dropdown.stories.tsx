import { Dropdown } from "@axa-fr/design-system-look-and-feel-react";
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
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      control: { type: "select" },
      options: ["", ...options.map((option) => option.value)],
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
