import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Form/Input/Text",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = Omit<React.ComponentProps<typeof Text>, "classModifier"> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const TextStory: Story = {
  name: "Text",
  render: ({ classModifier, onChange, ...args }) => (
    <Text
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
};
