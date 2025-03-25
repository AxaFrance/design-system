import { Svg, TextInput } from "@axa-fr/design-system-apollo-react";
import euroSymbolIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Components/Form/Input/TextInput",
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "Placeholder",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
    className: "",
    type: "text",
    buttonLabel: "",
    unit: undefined,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof TextInput>) => (
  <TextInput onChange={onChange} {...args} />
);

export const TextPlaceholderStory: Story = {
  name: "Text placeholder",
  render,
  args: {
    value: "",
    placeholder: "Type your name",
  },
};

export const TextStory: Story = {
  name: "Text filled",
  render,
};

export const TextDisabledStory: Story = {
  name: "Text disabled",
  render,
  args: {
    label: "Input disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?",
  },
};

export const TextWithDescriptionStory: Story = {
  name: "Text with description",
  render,
  args: {
    description: "Description",
  },
};

export const TextOnErrorStory: Story = {
  name: "Text on error",
  render,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message",
    "aria-errormessage": undefined,
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "text" },
    },
  },
};

export const TextOnSuccessStory: Story = {
  name: "Text on success",
  render,
  args: {
    description: "Description",
    success: "Success Message",
  },
};

export const TextWithButton: Story = {
  name: "Text with button",
  render,
  args: {
    buttonLabel: "En savoir plus",
  },
};

export const TextWithUnit: Story = {
  name: "Text with unit",
  render,
  args: {
    unit: <div>test</div>,
  },
};

export const TextWithSideButton: Story = {
  name: "Text with side button",
  render,
  args: {
    sideButtonLabel: "Modifier",
  },
};

export const TextWithSideButtonAndDescription: Story = {
  name: "Text with side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description",
  },
};

export const TextWithFull: Story = {
  name: "Text Full",
  render,
  args: {
    unit: <Svg src={euroSymbolIcon} aria-label="en euros" />,
    classModifier: "error",
    description: "Description",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    error: "Error Message",
  },
};
