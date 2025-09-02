import { Dropdown } from "@axa-fr/design-system-apollo-react";
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
  title: "Components/Form/Dropdown/Dropdown",
  args: {
    value: "",
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
type Story = StoryObj<StoryProps>;

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
  name: "Dropdown",
  render,
};

export const DropdownErrorStory: Story = {
  name: "Dropdown with Error",
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

export const DropdownDisabledStory: Story = {
  name: "Dropdown disabled",
  render,
  args: {
    label: "Label",
    description: "Description",
    disabled: true,
    helper: "Information complémentaire",
  },
};
