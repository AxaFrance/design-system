import "./Restitution.css";

import type { Meta, StoryObj } from "@storybook/react";

import { Restitution } from "./Restitution";

const meta: Meta = {
  title: "Pages/Restitution",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const List: StoryObj = {
  render: Restitution,
};
