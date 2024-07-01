import type { Meta, StoryObj } from "@storybook/html";
import "./Tag.client.scss";

const meta: Meta = {
  title: "Client/Components/Tag",
};

export default meta;

export const Default: StoryObj = {
  name: "Tag",
  render: (args) => {
    const tag = document.createElement("div");

    tag.className = "af-tag";

    if (args.classModifier !== "default")
      tag.className += ` af-tag--${args.classModifier}`;
    if (args.isMobile) tag.className += " af-tag--mobile";

    tag.innerHTML = `<span class="af-tag__label">${args.label}</span>`;

    return tag;
  },
  args: {
    label: "Texte",
    classModifier: "default",
    isMobile: false,
  },
  argTypes: {
    classModifier: {
      options: ["default", "success", "error", "warning", "info"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
};
