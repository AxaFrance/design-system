import { ItemFile } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ItemFile>;

const meta: Meta<typeof ItemFile> = {
  title: "Components/ItemFile",
  component: ItemFile,
  args: {
    loading: false,
    valid: false,
    title: "",
    subTitle: "",
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
    title: "IMG1404704650",
    subTitle: "12Mob",
  },
};
