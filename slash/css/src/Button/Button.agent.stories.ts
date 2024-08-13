import type { Meta, StoryObj } from "@storybook/html";
import "./Button.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Button",
};

export default meta;

const MODIFIERS = [
  "success",
  "info",
  "danger",
  "reverse",
  "disabled",
  "small",
  "hasiconLeft",
  "hasiconRight",
];

export const Primary: StoryObj = {
  render: (args) => {
    const btn = document.createElement("button");
    btn.innerHTML = args.icon
      ? `<span class="af-btn__text">${args.label}</span> <span class="glyphicon glyphicon-${args.icon}" /> `
      : args.label;

    btn.className = [
      "af-btn",
      args.classModifier ? `af-btn--${args.classModifier}` : "",
    ].join(" ");

    return btn;
  },
  args: {
    label: "Button",
    classModifier: "",
    icon: null,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
    icon: {
      control: { type: "text" },
    },
  },
};
