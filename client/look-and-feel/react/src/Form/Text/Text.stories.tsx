import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextVariants } from "./Text";

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
    variant: undefined,
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

const VARIANTS = [undefined, TextVariants.currency, TextVariants.years];

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

export const TextWithVariant: Story = {
  name: "Text with variant",
  render,
  args: {
    variant: TextVariants.currency,
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: "select" },
      defaultValue: undefined,
    },
  },
};

export const TextWithFull: StoryObj = {
  name: "Text Full",
  render,
  args: {
    variant: TextVariants.currency,
    classModifier: "error",
    description: "Description",
    buttonLabel: "En savoir plus",
    error: "Error Message",
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: "select" },
      defaultValue: undefined,
    },
  },
};
