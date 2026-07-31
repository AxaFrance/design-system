import { ItemMultiSelect } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta = {
  title: "Components/Form/ItemMultiSelect",
  component: ItemMultiSelect,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
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
  },
  args: {
    label: "Option 1",
    variant: "primary",
    name: "option1",
    value: "option1",
  },
};

export default meta;

export const Playground: StoryObj<ComponentProps<typeof ItemMultiSelect>> = {
  name: "Playground",
};

export const Primary: StoryObj<ComponentProps<typeof ItemMultiSelect>> = {
  args: {
    variant: "primary",
    label: "Primary background",
  },
};

export const Secondary: StoryObj<ComponentProps<typeof ItemMultiSelect>> = {
  args: {
    variant: "secondary",
    label: "Secondary background",
  },
};

export const Checked: StoryObj<ComponentProps<typeof ItemMultiSelect>> = {
  args: {
    checked: true,
    label: "Checked state",
  },
};

export const WithLongLabel: StoryObj<ComponentProps<typeof ItemMultiSelect>> = {
  args: {
    label:
      "This is a very long label that explains the option in detail to help users understand what this checkbox is for",
  },
};
