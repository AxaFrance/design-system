import type { Meta, StoryObj } from "@storybook/html";
import "../look-and-feel.scss";
import "./DebugGrid.scss";
import "./Grid-demo-example-form.scss";
import { render } from "./renderExampleForm";

const meta: Meta = {
  title: "Guidelines/Grid System/Examples",
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Form: StoryObj = {
  render,
};
