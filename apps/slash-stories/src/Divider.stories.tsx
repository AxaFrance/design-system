import { Divider } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  args: {},
};
export default meta;

export const Default: StoryObj<typeof Divider> = {
  name: "Divider",
  render: ({ mode, ...args }) => (
    <div
      style={{
        display: "flex",
        flexDirection:
          mode === "horizontal" || mode === undefined ? "column" : "row",
        gap: "1rem",
      }}
    >
      <div>
        <span>Contenu 1</span>
      </div>
      <Divider mode={mode} {...args} />
      <div>
        <span>Contenu 2</span>
      </div>
    </div>
  ),
  args: {
    mode: "horizontal",
  },
};
