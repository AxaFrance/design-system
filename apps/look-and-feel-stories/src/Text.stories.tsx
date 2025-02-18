import { Svg, TextInput } from "@axa-fr/design-system-look-and-feel-react";
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

export const TextStory: Story = {
  name: "Text",
  render,
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

export const TextWithFull: StoryObj = {
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
