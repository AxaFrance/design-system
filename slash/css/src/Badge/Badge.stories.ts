import type { Meta, StoryObj } from "@storybook/html";
import "./Badge.scss";

const meta: Meta = {
  title: "Slash/Components/Badge",
  parameters: {
    layout: "centered",
  },
};

export default meta;

const MODIFIERS = ["success", "info", "danger", "error"];

export const Default: StoryObj = {
  name: "Badge",
  render: (args) => {
    const badge = document.createElement("span");

    if (args.disabled) badge.setAttribute("disabled", "");

    badge.innerHTML = args.children;

    badge.className += [
      "af-badge",
      args.classModifier ? `af-badge--${args.classModifier}` : "",
    ].join(" ");

    return badge;
  },
  args: {
    children: "Lorem ipsum",
    classModifier: "success",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "success",
    },
  },
};

export const BadgeIconStory: StoryObj = {
  name: "Badge with icon",
  render: (args) => {
    const badge = document.createElement("span");

    if (args.disabled) badge.setAttribute("disabled", "");

    badge.innerHTML = args.children;

    badge.className += [
      "af-badge",
      args.classModifier ? `af-badge--${args.classModifier}` : "",
    ].join(" ");

    return badge;
  },
  args: {
    children: `<i class="glyphicon glyphicon-bell"> </i>`,
    classModifier: "error",
    disabled: false,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "success",
    },
  },
};
