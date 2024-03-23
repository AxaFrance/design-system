import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { RadioInput } from "./RadioInput";
import { RadioModes } from "./Radio";
import { Icon } from "../../../Icons/Icon.client";

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "Client/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

export const RadioInputStory: StoryObj<
  ComponentPropsWithRef<typeof RadioInput>
> = {
  name: "RadioInput",
  render: ({ ...args }) => <RadioInput {...args} />,
  args: {
    value: "lille",
    label: "What city do you live in ?",
    description: "Tell us everything...",
    mode: RadioModes.inline,
    disabled: false,
    erroneous: false,
    errorLabel: "Vous devez sélectionner une valeur",
    name: "placeName",
    options: [
      {
        icon: <Icon name="Flag" />,
        title: "Paris",
        subtitle: "Île-de-France",
        description: "Capitale de la France",
        value: "paris",
      },
      {
        icon: <Icon name="Home" />,
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
