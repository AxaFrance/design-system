import "@axa-fr/design-system-apollo-css/dist/Grid/DebugGrid.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Grid/Grid-demo-example-page.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/look-and-feel.scss";

import type { Meta, StoryObj } from "@storybook/html";
import { render } from "./renderExamplePage";

const meta: Meta = {
  title: "Guidelines/Grid System/Examples",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Page: StoryObj = {
  render,
};
