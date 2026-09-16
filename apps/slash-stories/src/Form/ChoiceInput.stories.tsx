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
>;

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
    onChange: fn(),
    isVisible: true,
    readOnly: false,
    disabled: false,
    value: undefined,
  },
  argTypes: {
    onChange: { action: "onChange" },
    value: {
      options: [undefined, true, false],
      control: { type: "inline-radio" },
    },
  },
});

export default meta;

export const ChoiceInputStory = meta.story({
  name: "ChoiceInput",
  render: (args) => <ChoiceInput {...args} />,
});

export const ChoiceInputWithChildrenStory = meta.story({
  name: "ChoiceInput with help button",
  render: (args) => (
    <ChoiceInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </ChoiceInput>
  ),
});
