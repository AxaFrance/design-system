/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-unresolved */
import type { Meta, StoryObj } from "@storybook/html";
import {
  render,
  VARIANTS,
  renderAll,
} from "../../../../common/css/src/Button/render";
import "./Button.scss";
import "../../../../common/css/src/Button/Button.stories.scss";

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
    variant: "",
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
