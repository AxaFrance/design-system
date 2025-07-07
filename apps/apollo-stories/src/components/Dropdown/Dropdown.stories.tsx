import { Dropdown } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Components/Form/Dropdown/Dropdown",
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
  },
};

export default meta;

type StoryProps = ComponentProps<typeof Dropdown>;
type Story = StoryObj<StoryProps>;

const render = ({ onChange, ...args }: StoryProps) => (
  <div style={{ width: 300 }}>
    <Dropdown onChange={onChange} {...args}>
      <option value="fun">For fun</option>
      <option value="work">For work</option>
      <option value="drink">For drink</option>
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
