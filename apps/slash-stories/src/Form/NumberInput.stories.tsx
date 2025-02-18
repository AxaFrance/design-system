import { MessageTypes, NumberInput } from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof NumberInput>,
  "classModifier"
> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const NumberInputStory: Story = {
  name: "NumberInput",
  render: ({ classModifier, onChange, ...args }) => (
    <NumberInput
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
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
};
