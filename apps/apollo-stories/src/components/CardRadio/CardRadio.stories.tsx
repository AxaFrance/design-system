import { CardRadio } from "@axa-fr/design-system-apollo-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/CardRadio",
  component: CardRadio,
  argTypes: {},
};

export default meta;

const baseOptions = [
  {
    label: "Paris",
    description: "Capitale de la France",
    subtitle: "Nord",
    value: "paris",
  },
  {
    label: "Bruxelles",
    description: "Capitale de la Belgique",
    value: "bruxelles",
  },
  {
    label: "Lille",
    value: "lille",
  },
];

type StoryProps = ComponentProps<typeof CardRadio> & {
  includeIcons?: boolean;
  options?: typeof baseOptions;
};

export const CardRadioStory: StoryObj<StoryProps> = {
  name: "CardRadio",
  render: ({ includeIcons = true, options = baseOptions, ...args }) => {
    const mappedOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <CardRadio {...args} options={mappedOptions} />;
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    name: "cities",
    includeIcons: true,
    options: baseOptions,
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    includeIcons: {
      control: { type: "boolean" },
      description: "Toggle icon visibility",
    },
    options: {
      control: { type: "object" },
      description: "Radio card options",
    },
    onChange: { action: "onChange" },
  },
};

export const CardRadioWithLabel: StoryObj<StoryProps> = {
  name: "CardRadioWithLabel",
  render: ({ includeIcons = true, options = baseOptions, ...args }) => {
    const mappedOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <CardRadio {...args} options={mappedOptions} />;
  },
  args: {
    type: "vertical",
    isRequired: true,
    name: "cities",
    includeIcons: true,
    options: baseOptions,
    labelGroup: "Choose your city",
    descriptionGroup: "Select the city where you want to live",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    includeIcons: {
      control: { type: "boolean" },
      description: "Toggle icon visibility",
    },
    options: {
      control: { type: "object" },
      description: "Radio card options",
    },
    onChange: { action: "onChange" },
  },
};
