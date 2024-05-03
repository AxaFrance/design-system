import home from "@material-design-icons/svg/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Svg } from "../../../Svg";
import { RadioSelect } from "./RadioSelect";

const meta: Meta = {
  title: "Client/Components/Form/Input/Radio/Select",
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
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "cities",
        value: "paris",
        icon: <Svg src={home} />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "cities",
        value: "bruxelles",
        icon: <Svg src={home} />,
      },
      {
        label: "Lille",
        name: "cities",
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
    options: {
      control: { type: "object" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    onChange: { action: "onChange" },
  },
};
