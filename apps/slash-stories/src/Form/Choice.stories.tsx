import { Choice } from "@axa-fr/canopee-react/distributeur";
import { ComponentPropsWithRef } from "react";
import preview from "../../.storybook/preview";

type ChoiceProps = Omit<
  ComponentPropsWithRef<typeof Choice>,
  "classModifier"
> & {
  classModifier?: string[];
};

const meta = preview.type<{ args: ChoiceProps }>().meta({
  title: "Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
});
export const ChoiceStory = meta.story({
  name: "Choice",
  render: ({ classModifier, ...args }) => (
    <Choice classModifier={classModifier?.join(" ")} {...args} />
  ),
  args: {
    name: "placeName",
    placeholder: "Paris",
    id: "uniqueid",
    classModifier: [],
    readOnly: false,
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    classModifier: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
});
