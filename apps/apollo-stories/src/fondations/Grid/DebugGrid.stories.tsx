import type { Meta, StoryObj } from "@storybook/react";

import { DebugGrid } from "@axa-fr/design-system-apollo-react";

const meta: Meta = {
  title: "Fondations/Grid System/DebugGrid",
  parameters: { layout: "fullscreen" },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ height: "100svh", display: "block" }}>
      <DebugGrid<{ forceVisible?: boolean }> isCheckedByDefaul forceVisible />
    </div>
  ),
};
