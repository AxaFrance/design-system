import { Number } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

type StoryProps = Omit<React.ComponentProps<typeof Number>, "classModifier"> & {
  classModifier: string[];
};
const MODIFIERS = ["", "required", "disabled"];

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export const NumberStory = meta.story({
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
});
