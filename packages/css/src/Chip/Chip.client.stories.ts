import type { Meta, StoryObj } from "@storybook/html";
import "./Chip.client.scss";

const meta: Meta = {
  title: "Client/Components/Chip",
};

export default meta;

export const Default: StoryObj = {
  name: "Chip",
  render: (args) => {
    const chip = document.createElement("div");

    chip.className = "af-chip";

    if (args.classModifier !== "default")
      chip.className += ` af-chip--${args.classModifier}`;
    if (args.isMobile) chip.className += " af-chip--mobile";

    chip.innerHTML = `<span class="af-chip__label">${args.label}</span>`;

    return chip;
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
