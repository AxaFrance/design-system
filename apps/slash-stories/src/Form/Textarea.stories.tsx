import { Textarea } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const MODIFIERS = ["", "required", "disabled"];
type StoryProps = Omit<React.ComponentProps<typeof Textarea>, "className"> & {
  modifiers: string[];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});
export default meta;

export const TextareaStory = meta.story({
  name: "Textarea",
  render: ({ modifiers, onChange, ...args }) => (
    <Textarea className={modifiers.join(" ")} onChange={onChange} {...args} />
  ),
  args: {
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "TextareaStoryId",
    readOnly: false,
    disabled: false,
    tabIndex: 0,
    autoFocus: false,
    modifiers: [],
  },
  argTypes: {
    modifiers: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
});
