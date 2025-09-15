import {
  TextArea,
  itemMessageVariants,
} from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/Form/Input/TextArea",
  argTypes: {
    label: { control: { type: "text" } },
    value: { control: { type: "text" } },
    description: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    required: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
    helper: { control: { type: "text" } },
    error: { control: { type: "text" } },
    buttonLabel: { control: { type: "text" } },
    sideButtonLabel: { control: { type: "text" } },
    onButtonClick: { action: "button clicked" },
    onSideButtonClick: { action: "side button clicked" },
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
  args: {
    value: "",
    placeholder: "Placeholder",
    description: "description",
    helper: "30 caractères max",
    label: "Label",
    name: "name",
    buttonLabel: "Submit",
    sideButtonLabel: "side button",
    required: true,
    disabled: false,
    error: "",
    message: "",
  },
};

export default meta;

export const TextAreaStory: StoryObj<typeof TextArea> = {
  name: "Playground",
};
