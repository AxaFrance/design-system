import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "./Form";

const meta: Meta = {
  title: "Pages/Form",
  parameters: { layout: "fullscreen" },
  argTypes: {
    "data-cols-mobile": { control: { type: "range", min: 2, max: 4, step: 1 } },
    "data-cols-tablet": { control: { type: "range", min: 4, max: 8, step: 1 } },
    "data-cols-desktop-small": {
      control: { type: "range", min: 5, max: 8, step: 1 },
    },
    "data-cols-desktop-medium": {
      control: { type: "range", min: 5, max: 8, step: 1 },
    },
    "data-cols-desktop-large": {
      control: { type: "range", min: 5, max: 8, step: 1 },
    },
  },
};

export default meta;

export const FormStory: StoryObj = {
  name: "Form",
  render: Form,
  args: {
    "data-cols-mobile": 4,
    "data-cols-tablet": 8,
    "data-cols-desktop-small": 5,
    "data-cols-desktop-medium": 5,
    "data-cols-desktop-large": 5,
  },
};
