import type { Meta, StoryObj } from "@storybook/html";
import "./Button.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Button",
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
  render: (args) => {
    const btn = document.createElement("button");
    btn.innerHTML = args.label;
    if (args.iconLeft) {
      btn.innerHTML = `${args.iconLeft}${btn.innerHTML}`;
    }
    if (args.iconRight) {
      btn.innerHTML = `${btn.innerHTML}${args.iconRight}`;
    }

    btn.className = [
      "af-btn-client",
      args.variant ? `af-btn-client--${args.variant}` : "",
    ].join(" ");

    if (args.disabled) {
      btn.setAttribute("disabled", args.disabled);
    }

    return btn;
  },
  args: {
    label: "Button",
    variant: "",
    iconLeft: `<svg viewBox="0 0 24 24" ><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path></svg>`,
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
