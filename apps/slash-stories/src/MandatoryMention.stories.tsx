import { MandatoryMention } from "@axa-fr/canopee-react/distributeur";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MandatoryMention> = {
  title: "Components/MandatoryMention",
  component: MandatoryMention,
  argTypes: {
    variant: {
      control: "radio",
      options: ["one", "all"],
    },
    id: { control: "text" },
  },
} satisfies Meta<typeof MandatoryMention>;
export default meta;

type Story = StoryObj<typeof MandatoryMention>;

export const Default: Story = {
  args: {
    variant: "one",
  },
};
