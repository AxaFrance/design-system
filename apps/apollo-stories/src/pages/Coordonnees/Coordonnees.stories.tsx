import "./Coordonnees.css";
import type { Meta, StoryObj } from "@storybook/react";

import { Coordonnees } from "./Coordonnees";

const meta: Meta = {
  title: "Pages/Devis Habitation",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepCoordonnees: StoryObj = {
  name: "Coordonnees",
  render: Coordonnees,
};
