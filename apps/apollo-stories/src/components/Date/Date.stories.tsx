import { DateInput } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";

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
  args: {
    value: undefined,
  },
};

export const DateInputDefaultWithDatePickerStory: Story = {
  name: "Date with date picker",
  render,
  args: {
    type: "date",
    value: undefined,
  },
};

export const DateInputFilledStory: Story = {
  name: "Date filled",
  render,
  args: {
    value: new Date("2000-09-12"),
  },
};

export const DateInputFilledWithDatePickerStory: Story = {
  name: "Date filled with date picker",
  render,
  args: {
    value: new Date("2000-09-12"),
    type: "date",
  },
};

export const DateInputErrorStory: Story = {
  name: "Date on error",
  render,
  args: {
    classModifier: "error",
    error: "Titre du message",
    "aria-errormessage": undefined,
    value: new Date("2067-09-12"),
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
    value: new Date("2067-09-12"),
    type: "date",
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};

export const DateInputDisabledStory: Story = {
  name: "Date disabled",
  render,
  args: {
    disabled: true,
    value: new Date("2000-09-12"),
  },
};
