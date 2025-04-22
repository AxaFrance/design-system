import { ItemFile } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFile> = {
  title: "Components/Form/ItemFile",
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
