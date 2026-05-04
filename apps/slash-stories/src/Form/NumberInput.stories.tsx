import {
  HelpButton,
  MessageTypes,
  NumberInput,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const MODIFIERS = ["", "required", "disabled"];
type StoryProps = Omit<
  React.ComponentProps<typeof NumberInput>,
  "classModifier"
> & {
  classModifier: string[];
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Number",
  args: {
    required: true,
    classModifier: [] as string[],
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
    classModifier: {
      options: MODIFIERS,
      control: { type: "inline-check" },
    },
  },
});

export default meta;

export const NumberInputStory = meta.story({
  name: "NumberInput",
  render: ({ classModifier, ...args }) => (
    <NumberInput classModifier={classModifier.join(" ")} {...args} />
  ),
});

export const NumberInputWithChildrenStory = meta.story({
  name: "NumberInput with help button",
  render: ({ classModifier, ...args }) => (
    // Add a button as children to the NumberInput
    <NumberInput classModifier={classModifier.join(" ")} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </NumberInput>
  ),
});
