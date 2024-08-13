import type { Meta, StoryObj } from "@storybook/html";
import "./IconBg.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/IconBg",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.className = `af-icon-bg${args.classModifier
      .split(" ")
      .filter(Boolean)
      .map((classModifier: string) => ` af-icon-bg--${classModifier}`)
      .join("")}`;
    if (args.isDisabled) {
      container.className += " af-icon-bg--disabled";
    }

    container.innerHTML = args.children;
    return container;
  },
  args: {
    isDisabled: false,
    children: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>`,
    classModifier: "secondary",
  },
};
