import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Svg } from "../../Svg";
import { RadioSelect } from "./RadioSelect";

const meta: Meta = {
  title: "Components/Form/Input/Radio/Select",
  component: RadioSelect,
  argTypes: {},
};

export default meta;

export const RadioSelectStory: StoryObj<ComponentProps<typeof RadioSelect>> = {
  name: "Select",
  render: ({ ...args }) => <RadioSelect {...args} />,
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    name: "cities",
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        value: "paris",
        icon: <Svg src={home} />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        value: "bruxelles",
        icon: <Svg src={home} />,
      },
      {
        label: "Lille",
        value: "lille",
        icon: <Svg src={home} />,
      },
    ],
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    errorMessage: {
      control: { type: "text" },
    },
    onChange: { action: "onChange" },
  },
};

export const RadioSelectDisabledStory: StoryObj<
  ComponentProps<typeof RadioSelect>
> = {
  name: "SelectDisabled",
  render: ({ ...args }) => <RadioSelect {...args} />,
  args: {
    type: "vertical",
    "aria-label": "Quelle ville ?",
    name: "cities",
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        value: "paris",
        icon: <Svg src={home} />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        value: "bruxelles",
        icon: <Svg src={home} />,
      },
      {
        label: "Lille",
        value: "lille",
        icon: <Svg src={home} />,
        checked: true,
      },
    ],
    isDisabled: true,
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    errorMessage: {
      control: { type: "text" },
    },
    onChange: { action: "onChange" },
  },
};
