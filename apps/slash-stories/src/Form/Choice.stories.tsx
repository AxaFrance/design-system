import { Choice } from "@axa-fr/canopee-react/distributeur";
import { ComponentPropsWithRef } from "react";
import preview from "../../.storybook/preview";

type ChoiceProps = Omit<ComponentPropsWithRef<typeof Choice>, "className"> & {
  modifiers?: string[];
};

const meta = preview.type<{ args: ChoiceProps }>().meta({
  title: "Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
});

export default meta;

export const ChoiceStory = meta.story({
  name: "Choice",
  render: ({ modifiers, ...args }) => (
    <Choice className={modifiers?.join(" ")} {...args} />
  ),
  args: {
    name: "placeName",
    placeholder: "Paris",
    id: "uniqueid",
    modifiers: [],
    readOnly: false,
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    modifiers: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
});
