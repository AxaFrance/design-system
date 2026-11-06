import "./Table.css";
import type { Meta, StoryObj } from "@storybook/react";

import { TablePage } from "./Table";

const meta: Meta = {
  title: "Pages/Exemples/Table",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const StepSortie: StoryObj = {
  name: "Table",
  render: TablePage,
};
