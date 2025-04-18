import { DateInput } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";

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

type Story = StoryObj<typeof DateInput>;

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
    type: "date",
  },
};

export const DateInputFilledStory: Story = {
  name: "Date filled",
  render,
  args: {
    value: new Date("2025-01-01"),
  },
};

export const DateInputFilledWithDatePickerStory: Story = {
  name: "Date filled with date picker",
  render,
  args: {
    value: new Date("2025-01-01"),
    type: "date",
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
    value: new Date("2080-01-01"),
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
    value: new Date("2080-01-01"),
    type: "date",
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};
