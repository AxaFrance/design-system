import { RadioItem } from "@axa-fr/canopee-react/distributeur";
import { ComponentPropsWithRef } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

type RadioItemProps = Omit<
  ComponentPropsWithRef<typeof RadioItem>,
  "className"
>;

const meta = preview.type<{ args: RadioItemProps }>().meta({
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
  render: ({ onChange, ...args }) => (
    <RadioItem onChange={onChange} {...args} />
  ),
});
export default meta;

export const RadioItemStory = meta.story({
  name: "RadioItem",
  args: {
    label: "Paris",
    value: "",
    isChecked: false,
    required: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});
