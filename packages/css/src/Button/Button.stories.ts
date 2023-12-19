import type { Meta, StoryObj } from "@storybook/html";
import "./Button.agent.scss";

const meta: Meta = {
  title: "Button",
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
    btn.innerText = args.label;

    btn.className = [
      "af-btn",
      args.classModifier ? "af-btn--" + args.classModifier : "",
    ].join(" ");

    return btn;
  },
  args: {
    label: "Button",
    classModifier: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
    },
  },
};
