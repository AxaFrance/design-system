import type { Meta, StoryObj } from "@storybook/react";

import { Coordonnees } from "./Coordonnees";

const meta: Meta = {
  title: "Pages/Exemples/Form Coordonnees",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepCoordonnees: StoryObj = {
  name: "FormCoordonnees",
  render: Coordonnees,
};
