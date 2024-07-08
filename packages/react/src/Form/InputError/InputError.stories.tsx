import { Meta, StoryObj } from "@storybook/react";
import { InputError } from "./InputError";

const meta: Meta<typeof InputError> = {
  title: "Client/Components/Form/InputError",
  component: InputError,
};
export default meta;

export const Default: StoryObj<typeof InputError> = {
  name: "Default",
  args: {
    message: "Error Message",
  },
};
