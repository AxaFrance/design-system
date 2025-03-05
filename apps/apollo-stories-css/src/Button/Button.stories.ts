import type { Meta, StoryObj } from "@storybook/html";
import {
  render,
  VARIANTS,
  renderAll,
} from "@axa-fr/design-system-common-client-css/Button/render.ts";

import "@axa-fr/design-system-common-client-css/Button/Button.story.scss";

const meta: Meta = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Playground: StoryObj = {
  name: "Button",
  render,
  args: {
    label: "Button",
    variant: "primary",
    iconLeft: `<svg width="24" height="24" viewBox="0 0 24 24" ><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>`,
    iconRight: undefined,
    disabled: false,
  },
  argTypes: {
    variant: {
      options: VARIANTS,
      control: { type: "select" },
    },
    iconLeft: {
      control: { type: "text" },
    },
    iconRight: {
      control: { type: "text" },
    },
  },
};

export const All: StoryObj = {
  render: renderAll,
};
