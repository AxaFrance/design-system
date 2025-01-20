import type { Meta, StoryObj } from "@storybook/react";
import euroSymbolIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";
import { Text } from "./Text";
import { Svg } from "../../Svg";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Form/Input/Text",
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

type Story = StoryObj<typeof Text>;

const render = ({ onChange, ...args }: React.ComponentProps<typeof Text>) => (
  <Text onChange={onChange} {...args} />
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

export const TextWithFull: StoryObj = {
  name: "Text Full",
  render,
  args: {
    unit: <Svg src={euroSymbolIcon} aria-label="en euros" />,
    classModifier: "error",
    description: "Description",
    buttonLabel: "En savoir plus",
    error: "Error Message",
  },
};
