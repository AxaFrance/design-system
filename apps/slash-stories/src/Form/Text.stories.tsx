import { Text } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";
import { inputTypes } from "./inputTypes";

const MODIFIERS = ["", "required", "disabled"];
type StoryProps = Omit<React.ComponentProps<typeof Text>, "classModifier"> & {
  classModifier: string[];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Text",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export const TextStory = meta.story({
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
    type: "text",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});
