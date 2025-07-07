import { Textarea } from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Textarea>,
  "classModifier"
> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const TextareaStory: Story = {
  name: "Textarea",
  render: ({ classModifier, onChange, ...args }) => (
    <Textarea
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    classModifier: [] as string[],
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "commentid",
    readOnly: false,
    disabled: false,
    tabIndex: 0,
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
