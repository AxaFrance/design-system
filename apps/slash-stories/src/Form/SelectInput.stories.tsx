import {
  HelpButton,
  MessageTypes,
  SelectInput,
} from "@axa-fr/canopee-react/distributeur";
import { ComponentProps } from "react";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

const meta = preview.meta({
  component: SelectInput,
  title: "Components/Form/Input/Select",
  args: {
    label: "Place type",
    mode: "default",
    helpMessage: "Enter the place type",
    required: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    placeholder: "- Select -",
    messageType: undefined,
    forceDisplayMessage: false,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    forceDisplayPlaceholder: false,
    name: "placeName",
    options,
    onChange: fn(),
    children: undefined,
  } satisfies ComponentProps<typeof SelectInput>,
});

export default meta;

export const SelectInputStory = meta.story({
  name: "SelectInput with label",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <SelectInput onChange={onChange} {...args} />
  ),
  argTypes: {
    messageType: {
      control: {
        type: "select",
        options: Object.keys(MessageTypes),
      },
    },
    classModifier: {
      control: "inline-check",
      options: ["required"],
    },
    name: { table: { disable: true } },
    id: { table: { disable: true } },
    roleContainer: { table: { disable: true } },
    ariaLabelContainer: { table: { disable: true } },
    isLabelContainerLinkedToInput: { table: { disable: true } },
  },
});

export const SelectWithStatus = meta.story({
  name: "SelectInput with statuses",
  tags: ["Form", "Input"],
  render: ({ onChange }) => (
    <>
      <SelectInput
        onChange={onChange}
        label="Select in error"
        options={[
          {
            value: "badoption",
            label: "This is a bad option 😈",
          },
        ]}
        value="badoption"
        forceDisplayMessage
        message="The bad option is forbidden"
        messageType={MessageTypes.error}
      />

      <SelectInput
        onChange={onChange}
        label="Select with warning"
        options={[
          {
            value: "dangerousoption",
            label: "This is a dangerous option 🔥",
          },
        ]}
        value="dangerousoption"
        forceDisplayMessage
        message="The dangerous option is dangerous"
        messageType={MessageTypes.warning}
      />

      <SelectInput
        onChange={onChange}
        label="Select in sucess"
        options={[
          {
            value: "validoption",
            label: "This is a valid option 🙂",
          },
        ]}
        value="validoption"
        forceDisplayMessage
        message="The option is valid, congratz 🎉"
        messageType={MessageTypes.success}
      />
    </>
  ),
});

export const SelectWithChildren = meta.story({
  name: "SelectInput with children",
  render: ({ ...args }) => (
    <SelectInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </SelectInput>
  ),
});
