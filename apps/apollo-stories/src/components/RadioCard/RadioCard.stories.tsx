import { RadioCard } from "@axa-fr/design-system-apollo-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/RadioCard",
  component: RadioCard,
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
    hasError: true,
  },
  {
    label: "Lille",
    value: "lille",
  },
];

type StoryProps = ComponentProps<typeof RadioCard> & {
  includeIcons?: boolean;
  options?: typeof baseOptions;
};

export const RadioCardStory: StoryObj<StoryProps> = {
  name: "Select",
  render: ({ includeIcons = true, options = baseOptions, ...args }) => {
    const mappedOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <RadioCard {...args} options={mappedOptions} />;
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

export const RadioCardWithLabel: StoryObj<StoryProps> = {
  name: "SelectWithLabel",
  render: ({ includeIcons = true, options = baseOptions, ...args }) => {
    const mappedOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <RadioCard {...args} options={mappedOptions} />;
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
