import { Dropdown } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";

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
};

export default meta;

type StoryProps = ComponentProps<typeof Dropdown>;
type Story = StoryObj<StoryProps> & { required?: boolean };

const render = (args: StoryProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ width: 300 }}>
      <Dropdown onChange={handleChange} {...args} value={value}>
        <option value="fun">For fun</option>
        <option value="work">For work</option>
        <option value="drink">For drink</option>
      </Dropdown>
    </div>
  );
};

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
