import "./Grid-demo-wireframe.story.scss";
import type { Meta, StoryObj } from "@storybook/react";

import { render } from "./renderWireframe";

const meta: Meta = {
  title: "Fondations/Grid System",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Wireframe: StoryObj = {
  render,
};
