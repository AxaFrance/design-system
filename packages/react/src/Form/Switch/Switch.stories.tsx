import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Switch } from "./Switch";
// import SwitchInput from './SwitchInput';
import { MessageTypes } from "../core";
import { SwitchInput } from "./SwitchInput";
import { SwitchItem } from "./SwitchItem";

export default {
  title: "Components/Form/Input/Radio switch",
  component: Switch,
} as Meta;

const options: Omit<ComponentProps<typeof SwitchItem>, "onChange">[] = [
  {
    id: "check0",
    label: "Choix 1",
    value: "1",
  },
  {
    id: "check1",
    label: "Choix 2",
    value: "2",
  },
  {
    id: "check2",
    label: "Choix 3",
    value: "3",
  },
  {
    label: "Choix 44444444444444",
    value: "4",
  },
];

export const SwitchStory: StoryObj<typeof Switch> = {
  name: "Switch",
  render: (args) => <Switch {...args} />,
  args: {
    value: options[3].value,
    disabled: false,
    options,
    name: "Form.Switch",
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      options: options.map((option) => option.value),
      control: {
        type: "select",
      },
    },
  },
};

export const SwitchInputStory: StoryObj<typeof SwitchInput> = {
  name: "SwitchInput",
  render: (args) => <SwitchInput {...args} />,
  args: {
    label: "Select a choice",
    value: options[3].value,
    disabled: false,
    options,
    name: "Form.Switch",
    isVisible: true,
    classModifier: "required",
    className: "",
    message: "",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      options: options.map((option) => option.value),
      control: {
        type: "select",
      },
    },
  },
};
