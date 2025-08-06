import { ItemProgressBar } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ItemProgressBar> = {
  component: ItemProgressBar,
  title: "Components/ItemProgressBar",
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
