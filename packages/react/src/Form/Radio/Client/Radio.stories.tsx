import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import { Radio, RadioModes } from "./Radio";

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
        icon: <FlagIcon />,
        title: "Paris",
        subtitle: "Île-de-France",
        description: "Capitale de la France",
        value: "paris",
      },
      { icon: <HomeIcon />, title: "Lille", value: "lille" },
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
