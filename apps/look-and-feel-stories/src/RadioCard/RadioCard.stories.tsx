import { RadioCard } from "@axa-fr/design-system-look-and-feel-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";

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
    const [selectedOption, setSelectedOption] = useState(0);
    return (
      <RadioCard
        {...args}
        value={selectedOption}
        onChange={setSelectedOption}
      />
    );
  },
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    options: storyOptions,
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
    const [selectedOption, setSelectedOption] = useState(0);
    return (
      <RadioCard
        {...args}
        value={selectedOption}
        onChange={setSelectedOption}
      />
    );
  },
  args: {
    type: "vertical",
    isRequired: true,
    options: storyOptions,
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    onChange: { action: "onChange" },
  },
};
