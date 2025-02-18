import { Checkbox } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Input/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export default meta;

export const CheckboxStory: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Basic",

  render: ({ ...args }) => <Checkbox {...args} />,
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
