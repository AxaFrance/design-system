import { DateInput } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof DateInput> = {
  component: DateInput,
  title: "Components/Form/Input/DateInput",
  argTypes: { onChange: { action: "onChange" } },
  args: {
    name: "brithDate",
    id: "uniqueId",
    label: "Date de naissance",
    required: true,
    description: "Decription",
    buttonLabel: "En savoir plus",
    helper: "Informations complémentaires",
  },
};

export default meta;

type StroyProps = ComponentProps<typeof DateInput>;
type Story = StoryObj<StroyProps>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof DateInput>) => (
  <DateInput onChange={onChange} {...args} />
);

export const DateInputDefaultStory: Story = {
  name: "Date",
  render,
};

export const DateInputDefaultWithDatePickerStory: Story = {
  name: "Date with date picker",
  render,
  args: {
    hideDatePicker: false,
  },
};

export const DateInputFilledStory: Story = {
  name: "Date filled",
  render,
  args: {
    value: "12/01/2025",
  },
};

export const DateInputFilledWithDatePickerStory: Story = {
  name: "Date filled with date picker",
  render,
  args: {
    value: "2025-01-12",
    hideDatePicker: false,
  },
};

export const DateInputDisabledStory: Story = {
  name: "Date disabled",
  render,
  args: {
    disabled: true,
  },
};

export const DateInputErrorStory: Story = {
  name: "Date on error",
  render,
  args: {
    classModifier: "error",
    error: "Titre du message",
    "aria-errormessage": undefined,
    value: "01/01/2080",
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};

export const DateInputErrorWithDatePickerStory: Story = {
  name: "Date on error with date picker",
  render,
  args: {
    classModifier: "error",
    error: "Titre du message",
    "aria-errormessage": undefined,
    value: "2080-01-01",
    hideDatePicker: false,
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};
