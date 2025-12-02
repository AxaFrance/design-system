import type { Meta, StoryObj } from "@storybook/react";

import { DebugGrid } from "@axa-fr/canopee-react/client";

const meta: Meta = {
  title: "Fondations/Grid System/DebugGrid",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default: StoryObj = {
  name: "Playground",
  render: () => (
    <div style={{ height: "100svh", display: "block" }}>
      <DebugGrid<{ forceVisible?: boolean }> isCheckedByDefault forceVisible />
    </div>
  ),
};
