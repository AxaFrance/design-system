import { CardRadio } from "@axa-fr/design-system-apollo-react/lf";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type CardRadioOption = {
  label: string;
  description?: string;
  subtitle?: string;
  value: string;
};

type StoryProps = ComponentProps<typeof CardRadio> & {
  includeIcons?: boolean;
  options: CardRadioOption[];
};

const meta: Meta<StoryProps> = {
  title: "Components/Form/Radio/CardRadio",
  component: CardRadio,
  argTypes: {},
};

export default meta;

const defaultOptions: CardRadioOption[] = [
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

export const CardRadioStory: StoryObj<StoryProps> = {
  name: "Select",
  render: ({ includeIcons = true, options = defaultOptions, ...args }) => {
    const finalOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <CardRadio {...args} options={finalOptions} />;
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

export const CardRadioWithLabel: StoryObj<StoryProps> = {
  name: "SelectWithLabel",
  render: ({ includeIcons = true, options = defaultOptions, ...args }) => {
    const finalOptions = options.map((option) => ({
      ...option,
      ...(includeIcons && { icon: home }),
    }));
    return <CardRadio {...args} options={finalOptions} />;
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
