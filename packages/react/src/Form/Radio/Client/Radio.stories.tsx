import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import flag from "@material-design-icons/svg/outlined/flag.svg";
import home from "@material-design-icons/svg/outlined/home.svg";
import { Radio, RadioModes } from "./Radio";
import { Svg } from "../../../Svg";

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
        icon: <Svg src={flag} fill="#00008F" />,
        title: "Paris",
        description: "Capitale de la France",
        subtitle: "Île-de-France",
        value: "paris",
      },
      {
        icon: <Svg src={home} fill="#00008F" />,
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
