import { InputError } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";

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
