import { Textarea } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const MODIFIERS = ["", "required", "disabled"];
type StoryProps = Omit<
  React.ComponentProps<typeof Textarea>,
  "classModifier"
> & {
  classModifier: string[];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export const TextareaStory = meta.story({
  name: "Textarea",
  render: ({ classModifier, onChange, ...args }) => (
    <Textarea
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    classModifier: [] as string[],
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "TextareaStoryId",
    readOnly: false,
    disabled: false,
    tabIndex: 0,
    autoFocus: false,
    className: "",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
});
