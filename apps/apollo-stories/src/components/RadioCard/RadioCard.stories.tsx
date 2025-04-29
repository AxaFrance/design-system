import { RadioCard } from "@axa-fr/design-system-apollo-react";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/RadioCard",
  component: RadioCard,
  argTypes: {},
};

export default meta;

const storyOptions = [
  {
    name: "city",
    label: "Paris",
    description: "Capitale de la France",
    subtitle: "Nord",
    value: "paris",
    icon: home,
  },
  {
    name: "city",
    label: "Bruxelles",
    description: "Capitale de la Belgique",
    value: "bruxelles",
    icon: home,
    hasError: true,
  },
  {
    name: "city",
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
    name: "cities",
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
    name: "cities",
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
