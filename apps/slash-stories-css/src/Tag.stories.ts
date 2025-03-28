import "@axa-fr/design-system-slash-css/dist/Tag/Tag.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Tag",
  parameters: {
    layout: "centered",
  },
};

export default meta;

const MODIFIERS = [
  "success",
  "info",
  "danger",
  "error",
  "warning",
  "axa",
  "black",
  "purple",
  "gray",
];

export const Default: StoryObj = {
  name: "Tag",
  render: (args) => {
    const badge = document.createElement("span");

    if (args.disabled) badge.setAttribute("disabled", "");

    badge.innerHTML = args.children;

    badge.className += [
      "af-tag",
      args.classModifier ? `af-tag--${args.classModifier}` : "",
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
  name: "Tag with icon",
  render: (args) => {
    const badge = document.createElement("span");

    if (args.disabled) badge.setAttribute("disabled", "");

    badge.innerHTML = args.children;

    badge.className += [
      "af-tag",
      args.classModifier ? `af-tag--${args.classModifier}` : "",
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
