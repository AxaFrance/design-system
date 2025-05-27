import { RadioCard } from "@axa-fr/design-system-look-and-feel-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Input/Radio/Select",
  component: RadioCard,
  argTypes: {},
};

export default meta;

const storyOptions = [
  {
    label: "Paris",
    description: "Capitale de la France",
    subtitle: "Nord",
    value: "paris",
    icon: home,
  },
  {
    label: "Bruxelles",
    description: "Capitale de la Belgique",
    value: "bruxelles",
    icon: home,
    hasError: true,
  },
  {
    label: "Lille",
    value: "lille",
    icon: home,
  },
];

export const RadioCardStory: StoryObj<ComponentProps<typeof RadioCard>> = {
  name: "Select",
  render: ({ ...args }) => {
    return <RadioCard {...args} />;
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    options: storyOptions,
    name: "cities",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    onChange: { action: "onChange" },
  },
};

export const RadioCardWithLabel: StoryObj<ComponentProps<typeof RadioCard>> = {
  name: "SelectWithLabel",
  render: ({ ...args }) => {
    return <RadioCard {...args} />;
  },
  args: {
    type: "vertical",
    isRequired: true,
    options: storyOptions,
    name: "cities",
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    onChange: { action: "onChange" },
  },
};
