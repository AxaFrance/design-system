import { RadioText } from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Radio/RadioText",
  component: RadioText,
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
    checked: {
      control: { type: "boolean" },
    },
    isInvalid: {
      control: { type: "boolean" },
    },
  },
  args: {
    label:
      "J'accepte de fournir à AXA mes coordonnées ainsi que les données relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra me contacter pour m'accompagner.",
    name: "option1",
    value: "option1",
  },
};

export default meta;

export const RadioTextStory: StoryObj<ComponentProps<typeof RadioText>> = {
  name: "Playground",
};
