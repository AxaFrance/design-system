import { TextArea } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/Form/Input/TextArea",
  args: {
    value: "Lorem ipsum",
    label: "Label",
    placeholder: "Placeholder",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
    className: "",
    buttonLabel: "",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof TextArea>) => (
  <TextArea onChange={onChange} {...args} />
);

export const TextAreaStory: Story = {
  name: "TextArea",
  render,
};

export const TextAreaWithDescriptionStory: Story = {
  name: "TextArea with description",
  render,
  args: {
    description: "Description",
  },
};

export const TextAreaOnErrorStory: Story = {
  name: "TextArea on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message",
  },
};

export const TextAreaWithButton: Story = {
  name: "TextArea with button",
  render,
  args: {
    buttonLabel: "En savoir plus",
    disabled: false,
  },
};

export const TextAreaDisabled: Story = {
  args: {
    value: "Placeholder",
    label: "Label",
    placeholder: "Placeholder",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: true,
    required: false,
    className: "",
    buttonLabel: "En savoir plus",
  },

  name: "TextArea disabled",
  render,
};
