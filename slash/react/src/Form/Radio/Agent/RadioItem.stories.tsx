import { Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { RadioItem } from "./RadioItem";

const meta: Meta<typeof RadioItem> = {
  component: RadioItem,
  title: "Slash/Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type RadioItemProps = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "classModifier"
> & {
  classModifier?: string[];
};
export const RadioItemStory: StoryObj<RadioItemProps> = {
  name: "RadioItem",
  render: ({ classModifier, onChange, ...args }) => (
    <RadioItem
      classModifier={classModifier?.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    label: "Paris",
    value: "",
    isChecked: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
  },
};
