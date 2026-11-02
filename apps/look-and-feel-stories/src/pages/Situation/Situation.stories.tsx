import type { Meta, StoryObj } from "@storybook/react";

import { Situation } from "./Situation";

const meta: Meta = {
  title: "Pages/Exemples/Form Situation",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepSituation: StoryObj = {
  name: "FormSituation",
  render: Situation,
};
