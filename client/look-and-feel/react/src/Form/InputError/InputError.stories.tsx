import { Meta, StoryObj } from "@storybook/react";
import { InputError } from "./InputError";

const meta: Meta<typeof InputError> = {
  title: "Components/Form/InputError",
  component: InputError,
};
export default meta;

export const Default: StoryObj<typeof InputError> = {
  args: {
    message: "Error Message",
  },
};
