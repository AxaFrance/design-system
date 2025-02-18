import "@axa-fr/design-system-look-and-feel-css/dist/Tag/Tag.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Tag",
};

export default meta;

export const Default: StoryObj = {
  name: "Tag",
  render: (args) => {
    const tag = document.createElement("div");

    tag.className = "af-tag";

    if (args.classModifier !== "default")
      tag.className += ` af-tag--${args.classModifier}`;

    tag.innerHTML = `<span class="af-tag__label">${args.label}</span>`;

    return tag;
  },
  args: {
    label: "Texte",
    classModifier: "default",
  },
  argTypes: {
    classModifier: {
      options: ["default", "success", "error", "warning", "info"],
      control: { type: "select" },
      defaultValue: "default",
    },
  },
};
