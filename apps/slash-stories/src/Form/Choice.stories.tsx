import { Choice } from "@axa-fr/canopee-react/distributeur";
import { ComponentPropsWithRef } from "react";
import preview from "../../.storybook/preview";

type ChoiceProps = Omit<ComponentPropsWithRef<typeof Choice>, "className">;

const meta = preview.type<{ args: ChoiceProps }>().meta({
  title: "Components/Form/Input/Choice",
  argTypes: { onChange: { action: "onChange" } },
});

export default meta;

export const ChoiceStory = meta.story({
  name: "Choice",
  render: (args) => <Choice {...args} />,
  args: {
    name: "placeName",
    placeholder: "Paris",
    id: "uniqueid",
    required: false,
    readOnly: false,
    disabled: false,
    value: false,
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
});
