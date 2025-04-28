import { ItemFile } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFile> = {
  title: "Components/ItemFile",
  component: ItemFile,
};
export default meta;

export const Error: StoryObj<typeof ItemFile> = {
  args: {
    error: "Error Message",
  },
};

export const Success: StoryObj<typeof ItemFile> = {
  args: {
    error: "yo",
  },
};
