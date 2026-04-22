import {
  DateInput,
  HelpButton,
  MessageTypes,
} from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const commonProps = {
  name: "birthDate",
  id: "uniqueid",
  value: new Date("01/01/2024"),
};

const meta = preview.meta({
  component: DateInput,
  title: "Components/Form/Input/Date",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

export default meta;

export const DateInputStory = meta.story({
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
  },
});

export const DateInputRequiredStory = meta.story({
  name: "Required Date with label",
  tags: ["Form", "Input"],
  render: ({ ...args }) => <DateInput {...args} />,
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
  },
});

export const DateInputWithChildrenStory = meta.story({
  name: "DateInput with help button",
  tags: ["Form", "Input"],
  render: ({ ...args }) => (
    <DateInput {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </DateInput>
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
});
