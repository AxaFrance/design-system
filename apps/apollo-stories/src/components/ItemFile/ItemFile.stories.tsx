import { ItemFile } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ItemFile>;

const meta: Meta<typeof ItemFile> = {
  title: "Components/Form/ItemFile",
  component: ItemFile,
  args: {
    loading: false,
    valid: false,
    title: "Title",
    subTitle: "Subtitle",
  },
  argTypes: {
    loading: { control: "boolean" },
    valid: { control: "boolean" },
    title: { control: "string" },
    subTitle: { control: "string" },
  },
};
export default meta;

export const ItemFileStory: Story = {
  name: "ItemFile",
  args: {
    error: true,
    loading: true,
    valid: false,
    title: "IMG1404704650",
    subTitle: "12 Mob",
  },
};
