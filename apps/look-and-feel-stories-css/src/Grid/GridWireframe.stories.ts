import "@axa-fr/design-system-look-and-feel-css/dist/Grid/DebugGrid.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Grid/Grid-demo-wireframe.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/look-and-feel.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./renderWireframe";

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
