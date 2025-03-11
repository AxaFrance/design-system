import "@axa-fr/design-system-apollo-css/dist/Button/ButtonLF.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./ButtonRender";

const meta: Meta = {
  title: "Components/Button",
};

export default meta;

const VARIANTS = [
  "primary",
  "primary-business",
  "secondary",
  "secondary-error",
  "tertiary",
  "ghost",
];

export const Primary: StoryObj = {
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
