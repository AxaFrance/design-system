import { Textarea } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

type StoryProps = Omit<React.ComponentProps<typeof Textarea>, "className">;

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});
export default meta;

export const TextareaStory = meta.story({
  name: "Textarea",
  render: ({ onChange, ...args }) => <Textarea onChange={onChange} {...args} />,
  args: {
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    placeholder: "Your comment",
    name: "comment",
    id: "TextareaStoryId",
    readOnly: false,
    disabled: false,
    required: false,
    tabIndex: 0,
    autoFocus: false,
  },
});
