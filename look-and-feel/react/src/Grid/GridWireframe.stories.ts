import type { Meta, StoryObj } from "@storybook/react";
import "@axa-fr/design-system-look-and-feel-css/dist/look-and-feel.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Grid/Grid-demo-wireframe.scss";

import { render } from "./renderWireframe";

const meta: Meta = {
  title: "Guidelines/Grid System",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Wireframe: StoryObj = {
  render,
};
