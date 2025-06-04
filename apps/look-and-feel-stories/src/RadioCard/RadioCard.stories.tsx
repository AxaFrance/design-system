import { RadioCard } from "@axa-fr/design-system-look-and-feel-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type RadioCardOption = {
  label: string;
  description?: string;
  subtitle?: string;
  value: string;
  hasError?: boolean;
};

type StoryProps = ComponentProps<typeof RadioCard> & {
  includeIcons?: boolean;
  options: RadioCardOption[];
};

const meta: Meta<StoryProps> = {
  title: "Components/Form/Input/Radio/Select",
  component: RadioCard,
  argTypes: {},
};

export default meta;

const defaultOptions: RadioCardOption[] = [
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

export const RadioCardStory: StoryObj<StoryProps> = {
  name: "Select",
  render: ({ includeIcons = true, options = defaultOptions, ...args }) => {
    const finalOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <RadioCard {...args} options={finalOptions} />;
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    options: defaultOptions,
    name: "cities",
    includeIcons: true,
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    includeIcons: {
      control: { type: "boolean" },
      description: "Toggle icons visibility",
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
  render: ({ includeIcons = true, options = defaultOptions, ...args }) => {
    const finalOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <RadioCard {...args} options={finalOptions} />;
  },
  args: {
    type: "vertical",
    isRequired: true,
    options: defaultOptions,
    name: "cities",
    includeIcons: true,
    labelGroup: "Choisissez une ville",
    descriptionGroup:
      "Sélectionnez la ville de votre choix parmi les options suivantes",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    includeIcons: {
      control: { type: "boolean" },
      description: "Toggle icons visibility",
    },
    options: {
      control: { type: "object" },
      description: "Radio card options",
    },
    onChange: { action: "onChange" },
  },
};
