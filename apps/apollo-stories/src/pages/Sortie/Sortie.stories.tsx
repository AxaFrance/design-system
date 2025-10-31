import "./Sortie.css";
import type { Meta, StoryObj } from "@storybook/react";

import { Sortie } from "./Sortie";

const meta: Meta = {
  title: "Pages/Devis Habitation",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepSortie: StoryObj = {
  name: "Sortie",
  render: Sortie,
};
