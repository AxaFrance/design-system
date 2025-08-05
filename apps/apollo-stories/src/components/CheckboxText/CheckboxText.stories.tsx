import { CheckboxText } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Checkbox/CheckboxText",
  component: CheckboxText,
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
    checked: {
      control: { type: "boolean" },
    },
    errorId: {
      table: {
        disable: true,
      },
    },
    hasError: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label:
      "J'accepte de fournir à AXA mes coordonnées ainsi que les données relatives à mon projet et ma situation. Ces dernières seront transmises à mon conseiller AXA qui pourra  me contacter pour m'accompagner.",
    name: "option1",
    value: "option1",
  },
};

export default meta;

export const CheckboxTextStory: StoryObj<ComponentProps<typeof CheckboxText>> =
  {
    name: "Playground",
  };
