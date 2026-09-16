import {
  HelpButton,
  MessageTypes,
  NumberInput,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const MODIFIERS = ["", "required", "disabled"];

const meta = preview.meta({
  title: "Components/Form/Input/Number",
  component: NumberInput,
  args: {
    required: true,
    value: 5,
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    label: "Your name",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    message: "",
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
    className: {
      options: MODIFIERS,
      control: { type: "inline-check" },
    },
  },
});

export default meta;

export const NumberInputStory = meta.story({
  name: "NumberInput",
  render: ({ ...args }) => <NumberInput {...args} />,
});

export const NumberInputWithChildrenStory = meta.story({
  name: "NumberInput with help button",
  render: ({ ...args }) => (
    // Add a button as children to the NumberInput
    <NumberInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
  ),
});
