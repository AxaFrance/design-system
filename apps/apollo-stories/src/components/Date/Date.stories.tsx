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
    value: "2025-01-01",
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

export const DateInputStory: Story = {
  name: "Date",
  render,
};

export const DateInputErrorStory: Story = {
  name: "Date on error",
  render,
  args: {
    classModifier: "error",
    error: "Titre du message",
    "aria-errormessage": undefined,
    value: "2080-01-01",
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};

export const DateInputSuccessStory: Story = {
  name: "Date on success",
  render,
  args: {
    classModifier: "success",
    success: "Titre du message",
  },
};

export const DateInputDisabledStory: Story = {
  name: "Date disabled",
  render,
  args: {
    disabled: true,
  },
};
