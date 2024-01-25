import type { Meta, StoryObj } from "@storybook/html";
import "./Title.agent.scss";

const meta: Meta = {
  title: "Components/Title",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const title = document.createElement("h1");
    title.innerHTML = args.text;
    title.className = args.classModifier ? args.classModifier : "";

    return title;
  },
  args: {
    text: "Sample Title",
    classModifier: "af-title",
  },
};
