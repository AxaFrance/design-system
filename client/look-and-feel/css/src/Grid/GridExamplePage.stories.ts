import type { Meta, StoryObj } from "@storybook/html";
import "../look-and-feel.scss";
import "./DebugGrid.scss";
import "./Grid-demo-example-page.scss";
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
