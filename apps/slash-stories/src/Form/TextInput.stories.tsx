import {
  HelpButton,
  MessageTypes,
  TextInput,
} from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";
import { inputTypes } from "./inputTypes";

const meta = preview.meta({
  component: TextInput,
  title: "Components/Form/Input/Text",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export default meta;

export const TextInputStory = meta.story({
  name: "TextInput",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    classModifier: "required",
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    message: "message",
    className: "",
    type: "text",
    label: "Your name",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});

export const TextInputErrorStory = meta.story({
  name: "TextInputError",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: "Your name",
    message: "The field is required",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: true,
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});

export const TextInputSuccessStory = meta.story({
  name: "TextInputSuccess",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: "Your name",
    message: "Success Message Type",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: true,
    messageType: MessageTypes.success,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});

export const TextInputRichLabelStory = meta.story({
  name: "TextInputRichLabel",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    label: (
      <span>
        Place name <em>optional</em>
      </span>
    ),
    message: "The field is required",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
  },
  argTypes: {
    type: {
      options: inputTypes,
      control: { type: "select" },
    },
  },
});

export const TextInputWithAppendChildren = meta.story({
  name: "TextInput with help button",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args}>
      <HelpButton mode="hover">asdasd</HelpButton>
    </TextInput>
  ),
  args: {
    required: true,
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
    helpMessage: "Aide à la saisie",
    label: "Your name",
  },
});
