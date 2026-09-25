import { Text } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";
import { inputTypes } from "./inputTypes";

type StoryProps = Omit<React.ComponentProps<typeof Text>, "className">;

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Text",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export default meta;

export const TextStory = meta.story({
  name: "Text",
  render: ({ onChange, ...args }) => <Text onChange={onChange} {...args} />,
  args: {
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    required: false,
    autoFocus: false,
    type: "text",
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});
