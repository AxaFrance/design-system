import "./Situation.css";
import type { Meta, StoryObj } from "@storybook/react";

import { Situation } from "./Situation";

const meta: Meta = {
  title: "Pages/Devis Habitation",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepSituation: StoryObj = {
  name: "Situation",
  render: Situation,
};
