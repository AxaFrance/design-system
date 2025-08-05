import { ProgressBar } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Components/ProgressBar",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: {
        type: "number",
      },
    },
    max: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    value: 70,
    max: 100,
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "70vw" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type StoryProps = ComponentProps<typeof ProgressBar>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Playground",
};
