import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./renderWireframe";
import "../look-and-feel.scss";
import "./DebugGrid.scss";
import "./Grid-demo-wireframe.scss";

const meta: Meta = {
  title: "Guidelines/Grid System",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Wireframe: StoryObj = {
  render,
};
