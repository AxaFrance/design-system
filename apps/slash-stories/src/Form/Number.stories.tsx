import { Number } from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof Number> = {
  component: Number,
  title: "Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
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
