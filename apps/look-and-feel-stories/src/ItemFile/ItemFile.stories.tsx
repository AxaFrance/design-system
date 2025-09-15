import {
  ItemFile,
  itemFileVariants,
  itemMessageVariants,
} from "@axa-fr/design-system-apollo-react/lf";
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
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
};
export default meta;

export const Playground: Story = {
  args: {
    state: "success",
    title: "IMG_879687880.jpg",
    subTitle: "0.12 Mo",
    errorMessage: "",
    message: "",
    messageType: undefined,
  },
};
