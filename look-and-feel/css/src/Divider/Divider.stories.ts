import type { Meta, StoryObj } from "@storybook/html";
import "./Divider.scss";

const meta: Meta = {
  title: "Components/Divider",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const divider = document.createElement("hr");
    divider.className = `af-divider${args.classModifier
      .split(" ")
      .filter(Boolean)
      .map((classModifier: string) => ` af-divider--${classModifier}`)
      .join("")}`;
    return divider;
  },
  args: {
    classModifier: "",
  },
};
