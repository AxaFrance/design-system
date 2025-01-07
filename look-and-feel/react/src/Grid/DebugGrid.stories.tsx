import type { Meta, StoryObj } from "@storybook/react";

import { DebugGrid } from "./DebugGrid";

const meta: Meta = {
  title: "Guidelines/Grid System/DebugGrid",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ height: "100svh", display: "block" }}>
      <DebugGrid isCheckedByDefault />
    </div>
  ),
};
