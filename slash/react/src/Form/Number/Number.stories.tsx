import type { Meta, StoryObj } from "@storybook/react";
import { Number } from "./Number";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof Number> = {
  component: Number,
  title: "Slash/Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = Omit<React.ComponentProps<typeof Number>, "classModifier"> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const NumberStory: Story = {
  name: "Number",
  render: ({ classModifier, onChange, ...args }) => (
    <Number
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    classModifier: [] as string[],
    value: 5,
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    "aria-disabled": false,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "inline-check" },
    },
  },
};
