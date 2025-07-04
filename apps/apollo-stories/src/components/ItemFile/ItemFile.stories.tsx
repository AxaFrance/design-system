import { ItemFile, itemFileVariants } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ItemFile>;

const meta: Meta<typeof ItemFile> = {
  title: "Components/Form/ItemFile",
  component: ItemFile,
  argTypes: {
    state: {
      options: Object.values(itemFileVariants),
      control: { type: "select" },
    },
  },
};
export default meta;

export const Default: Story = {
  args: {
    state: "success",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
  },
};

export const Loading: Story = {
  args: {
    state: "loading",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
    errorMessage: "Titre du message",
  },
};
