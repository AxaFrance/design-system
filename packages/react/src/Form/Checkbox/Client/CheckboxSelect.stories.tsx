import Home from "@mui/icons-material/Home";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta = {
  title: "Client/Components/Form/Input/Checkbox/Select",
  component: Checkbox.Select,
  argTypes: {},
};

export default meta;

export const CheckboxSelectStory: StoryObj<
  ComponentPropsWithRef<typeof Checkbox.Select>
> = {
  name: "Select",
  render: ({ ...args }) => <Checkbox.Select {...args} />,
  args: {
    type: "vertical",
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: <Home />,
      },
      {
        label: "Bruxelles",
        description: "Capitale de la Belgique",
        name: "bruxelles",
        value: "bruxelles",
        icon: <Home />,
      },
      {
        label: "Lille",
        name: "lille",
        value: "lille",
        icon: <Home />,
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
