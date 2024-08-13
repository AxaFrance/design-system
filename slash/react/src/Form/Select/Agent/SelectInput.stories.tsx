import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { MessageTypes } from "../../core";
import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  component: SelectInput,
  title: "Slash/Components/Form/Input/Select",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = ComponentProps<typeof SelectInput>;
type Story = StoryObj<StoryProps>;

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

export const SelectInputStory: Story = {
  name: "Select with label",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <SelectInput onChange={onChange} {...args} />
  ),
  args: {
    label: "Place type",
    mode: "default",
    helpMessage: "Enter the place type",
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    placeholder: "- Select -",
    message: "",
    messageType: undefined,
    forceDisplayMessage: false,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    forceDisplayPlaceholder: false,
    name: "placeName",
    options,
  },
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
    setStateMemoryFn: { table: { disable: true } },
    onChangeByStateFn: { table: { disable: true } },
    initialState: { table: { disable: true } },
    setStateOnFocusFn: { table: { disable: true } },
    setStateOnBlurFn: { table: { disable: true } },
    roleContainer: { table: { disable: true } },
    ariaLabelContainer: { table: { disable: true } },
    isLabelContainerLinkedToInput: { table: { disable: true } },
  },
};

export const SelectWithStatus: StoryObj<ComponentProps<typeof SelectInput>> = {
  name: "Select with statuses",
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
  argTypes: {
    onChange: { action: "onChange" },
  },
};
