import { RadioItem } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef } from "react";

const meta: Meta<typeof RadioItem> = {
  component: RadioItem,
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
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
