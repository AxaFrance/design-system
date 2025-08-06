import { TextArea } from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Components/Form/Input/TextArea",
  argTypes: {
    label: { control: { type: "text" } },
    value: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    required: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
    helper: { control: { type: "text" } },
    error: { control: { type: "text" } },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    name: "name",
  },
};

export default meta;

export const TextAreaStory: StoryObj<typeof TextArea> = {
  name: "Playground",
};
