import home from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Svg } from "../../../Svg";
import { CheckboxSelect } from "./CheckboxSelect";

const meta: Meta = {
  title: "Look-and-feel/Components/Form/Input/Checkbox/Select",
  component: CheckboxSelect,
  argTypes: {},
};

export default meta;

export const CheckboxSelectStory: StoryObj<
  ComponentProps<typeof CheckboxSelect>
> = {
  name: "Select",
  render: ({ ...args }) => <CheckboxSelect {...args} />,
  args: {
    type: "vertical",
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: <Svg src={home} />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "bruxelles",
        value: "bruxelles",
        icon: <Svg src={home} />,
      },
      {
        label: "Lille",
        name: "lille",
        value: "lille",
        icon: <Svg src={home} />,
        disabled: true,
        checked: true,
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
