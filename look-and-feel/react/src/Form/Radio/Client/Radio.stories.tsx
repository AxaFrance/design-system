import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Radio } from "./Radio";

const meta: Meta = {
  title: "Look-and-feel/Components/Form/Input/Radio",
  component: Radio,
  argTypes: {},
};

export default meta;

export const RadioStory: StoryObj<ComponentProps<typeof Radio>> = {
  name: "Basic",

  render: ({ ...args }) => <Radio {...args} />,
  args: {
    label:
      "J'accepte de fournir à AXA mes coordonnées ainsi que les données  relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner.",
    name: "option1",
    value: "option1",
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
    onChange: { action: "onChange" },
  },
};
