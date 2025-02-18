import { DateInput, MessageTypes } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";

const commonProps = {
  name: "brithDate",
  id: "uniqueid",
  value: new Date("01/01/2024"),
};

const meta: Meta<typeof DateInput> = {
  component: DateInput,
  title: "Components/Form/Input/Date",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type StoryProps = ComponentProps<typeof DateInput>;
type Story = StoryObj<StoryProps>;

export const DateInputStory: Story = {
  name: "Date with label",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <DateInput onChange={onChange} {...args} />
  ),
  args: {
    ...commonProps,
    required: false,
    isVisible: true,
    label: "Birth date",
    helpMessage: "jj/mm/aaaa",
    messageType: MessageTypes.success,
    message: "",
    forceDisplayMessage: false,
    id: "dateId",
    classModifier: "",
    className: "",
    disabled: false,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
  },
};

export const DateInputRequiredStory: Story = {
  name: "Required Date with label",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }) => (
    <DateInput onChange={onChange} {...args} />
  ),
  args: {
    required: true,
    ...commonProps,
    isVisible: true,
    label: "Birth date",
    helpMessage: "jj/mm/aaaa",
    messageType: MessageTypes.success,
    message: "",
    forceDisplayMessage: false,
    id: "dateId",
    className: "",
    disabled: false,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
  },
};
