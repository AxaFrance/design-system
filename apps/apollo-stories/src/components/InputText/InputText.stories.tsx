import { Svg, InputText } from "@axa-fr/design-system-apollo-react";
import euroSymbolIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof InputText> = {
  component: InputText,
  title: "Components/Form/Input/InputText",
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

type Story = StoryObj<typeof InputText>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof InputText>) => (
  <InputText onChange={onChange} {...args} />
);

export const InputTextPlaceholderStory: Story = {
  name: "Placeholder",
  render,
  args: {
    value: "",
    placeholder: "Type your name",
  },
};

export const InputTextStory: Story = {
  name: "Filled",
  render,
};

export const InputTextDisabledStory: Story = {
  name: "Disabled",
  render,
  args: {
    label: "InputText disabled",
    description: "Description",
    unit: <div>test</div>,
    disabled: true,
    helper: "Do you need help?",
  },
};

export const InputTextWithDescriptionStory: Story = {
  name: "With description",
  render,
  args: {
    description: "Description",
  },
};

export const InputTextOnErrorStory: Story = {
  name: "On error",
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

export const InputTextOnSuccessStory: Story = {
  name: "On success",
  render,
  args: {
    description: "Description",
    success: "Success Message",
  },
};

export const InputTextWithButton: Story = {
  name: "With button",
  render,
  args: {
    buttonLabel: "En savoir plus",
  },
};

export const InputTextWithUnit: Story = {
  name: "With unit",
  render,
  args: {
    unit: <div>test</div>,
  },
};

export const InputTextWithSideButton: Story = {
  name: "With side button",
  render,
  args: {
    sideButtonLabel: "Modifier",
  },
};

export const InputTextWithSideButtonAndDescription: Story = {
  name: "With side button and description",
  render,
  args: {
    sideButtonLabel: "Modifier",
    description: "Description",
  },
};

export const InputTextWithFull: Story = {
  name: "Full",
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
