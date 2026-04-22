import {
  HelpButton,
  MessageTypes,
  TextareaInput,
} from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  component: TextareaInput,
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: {
    onChange: fn(),
    label: "Comment",
    name: "comment",
    id: "TextareaInputId",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    required: true,
    rows: 6,
    cols: 60,
    placeholder: "",
    helpMessage: "Enter a comment",
    messageType: MessageTypes.error,
    message: "",
    forceDisplayMessage: false,
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    tabIndex: 0,
    autoFocus: true,
  },
});

export const TextareaInputStory = meta.story({
  name: "TextareaInput",
  render: ({ onChange, ...args }) => (
    <TextareaInput onChange={onChange} {...args} />
  ),
  args: {},
});

export const TextAreaInputWithChildren = meta.story({
  name: "TextareaInput with help button",
  render: ({ onChange, ...args }) => (
    <TextareaInput onChange={onChange} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
  ),
});
