import type { Meta, StoryObj } from "@storybook/react-vite";

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
