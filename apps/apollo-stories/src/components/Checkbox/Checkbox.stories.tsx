import { Checkbox } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/Checkbox/Checkbox",
  component: Checkbox,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    checked: {
      control: { type: "boolean" },
    },
    "aria-invalid": { type: "boolean" },
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
    name: "option1",
    value: "option1",
  },
};

export default meta;

export const CheckboxStory: StoryObj<ComponentProps<typeof Checkbox>> = {
  name: "Playground",
};
