import {
  ChoiceInput,
  HelpButton,
  MessageTypes,
} from "@axa-fr/canopee-react/distributeur";
import { ComponentPropsWithRef } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

type ChoiceInputProps = Omit<
  ComponentPropsWithRef<typeof ChoiceInput>,
  "className"
> & {
  modifiers?: string[];
};

const meta = preview.type<{ args: ChoiceInputProps }>().meta({
  title: "Components/Form/Input/Choice",
  args: {
    name: "placeName",
    required: true,
    label: "Place type",
    placeholder: "Paris",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    classNameContainerInput: "col-md-10",
    classNameContainerLabel: "col-md-2",
    message: "",
    id: "uniqueid",
    modifiers: [],
    onChange: fn(),
    isVisible: true,
    readOnly: false,
    disabled: false,
    value: undefined,
  },
  argTypes: {
    onChange: { action: "onChange" },
    modifiers: {
      options: ["disabled", "required"],
      control: { type: "inline-check" },
    },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
});

export default meta;

export const ChoiceInputStory = meta.story({
  name: "ChoiceInput",
  render: ({ modifiers, ...args }) => (
    <ChoiceInput className={modifiers?.join(" ")} {...args} />
  ),
});

export const ChoiceInputWithChildrenStory = meta.story({
  name: "ChoiceInput with help button",
  render: ({ modifiers, ...args }) => (
    <ChoiceInput className={modifiers?.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
  ),
});
