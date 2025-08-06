import { ItemProgressBar } from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ItemProgressBar> = {
  component: ItemProgressBar,
  title: "Components/ItemProgressBar",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 10 },
    },
    max: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    label: "Loading something...",
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

type StoryProps = ComponentProps<typeof ItemProgressBar>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Playground",
};
