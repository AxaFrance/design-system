import { ItemFile } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof ItemFile> = {
  title: "Components/Form/ItemFile",
  component: ItemFile,
};
export default meta;
const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof ItemFile>) => (
  <ItemFile onChange={onChange} {...args} />
);

export const Error: StoryObj<typeof ItemFile> = {
  render,
  args: {
    error: "Error Message",
  },
};

export const Success: StoryObj<typeof ItemFile> = {
  args: {
    error: "Success Message",
  },
};
