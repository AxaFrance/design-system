import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { Radio, RadioModes } from "./Radio";
import { Icon } from "../../../Icons/icons.client";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Client/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

export const RadioStory: StoryObj<ComponentPropsWithRef<typeof Radio>> = {
  name: "Radio",
  render: ({ ...args }) => <Radio {...args} />,
  args: {
    value: "lille",
    mode: RadioModes.inline,
    disabled: false,
    erroneous: false,
    name: "placeName",
    options: [
      {
        icon: <Icon name="flag" fill="#00008F" />,
        title: "Paris",
        description: "Capitale de la France",
        subtitle: "Île-de-France",
        value: "paris",
      },
      {
        icon: <Icon name="home" fill="#00008F" />,
        title: "Lille",
        value: "lille",
      },
      {
        title: "Madrid",
        description: "Capitale de l'Espagne",
        value: "madrid",
      },
      {
        title: "Berlin",
        value: "berlin",
      },
    ],
  },
  argTypes: {
    mode: {
      options: [RadioModes.classic, RadioModes.default, RadioModes.inline],
      control: { type: "inline-radio" },
    },
    value: {
      options: ["empty", "paris", "lille", "madrid", "berlin"],
      mapping: {
        empty: "",
      },
      control: { type: "inline-radio" },
    },
  },
};
