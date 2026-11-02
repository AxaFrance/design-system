import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard } from "./Dashboard";
import { DashboardContract } from "./DashboardContract/index";

const meta: Meta = {
  title: "Pages/Exemples/Dashboard",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const DashboardStory: StoryObj = {
  name: "Dashboard",
  render: Dashboard,
};

export const DashboardContractStory: StoryObj = {
  name: "Dashboard Contract",
  render: DashboardContract,
};
