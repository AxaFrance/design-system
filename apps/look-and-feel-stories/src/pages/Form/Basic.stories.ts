import "./Basic.css";
import type { Meta, StoryObj } from "@storybook/react";

import { Basic as BasicForm } from "./Basic";

const meta: Meta = {
  title: "Pages/Form",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Basic: StoryObj = {
  render: BasicForm,
};
