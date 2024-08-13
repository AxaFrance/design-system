import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { PreviousLink } from "./PreviousLink";

const meta: Meta<typeof PreviousLink> = {
  title: "Look-and-feel/Components/Header/PreviousLink",
  component: PreviousLink,
  argTypes: {
    handleClick: { action: "active link reset" },
  },
};
export default meta;

type StoryProps = React.ComponentProps<typeof PreviousLink>;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: ({ children, handleClick }: StoryProps) => (
    <PreviousLink handleClick={handleClick}>{children}</PreviousLink>
  ),
  args: {
    children: (
      <a key="Previous link" href="/mes-contrats">
        Retour à mes contrats
      </a>
    ),
  },
};
