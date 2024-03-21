import { Meta, StoryObj } from "@storybook/react";

import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import { ComponentPropsWithRef } from "react";
import { Checkbox, CheckboxModes } from "./Checkbox";

const meta: Meta = {
  title: "Client/Components/Form/Input/Checkbox",
  component: Checkbox,
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

export const CheckboxStory: StoryObj<ComponentPropsWithRef<typeof Checkbox>> = {
  name: "Checkbox",
  render: ({ ...args }) => <Checkbox {...args} />,
  args: {
    values: ["lille", "madrid"],
    mode: CheckboxModes.inline,
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
      options: [
        CheckboxModes.classic,
        CheckboxModes.default,
        CheckboxModes.inline,
      ],
      control: { type: "inline-radio" },
    },
    values: {
      options: ["paris", "lille", "madrid"],
      control: { type: "inline-check" },
    },
  },
};
