import { InputDate } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof InputDate> = {
  component: InputDate,
  title: "Components/Form/Input/InputDate",
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

type Story = StoryObj<typeof InputDate>;

const render = ({
  onChange,
  ...args
}: React.ComponentProps<typeof InputDate>) => (
  <InputDate onChange={onChange} {...args} />
);

export const InputDateDefaultStory: Story = {
  name: "Date",
  render,
};

export const InputDateFilledStory: Story = {
  name: "Date filled",
  render,
  args: {
    value: new Date("2025-01-01"),
  },
};

export const InputDateDisabledStory: Story = {
  name: "Date disabled",
  render,
  args: {
    disabled: true,
    value: new Date("2000-01-01"),
  },
};

export const InputDateDisabledEmptyStory: Story = {
  name: "Date disabled empty",
  render,
  args: {
    disabled: true,
  },
};

export const InputDateErrorStory: Story = {
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

export const InputDateErrorEmptyStory: Story = {
  name: "Date on error empty",
  render,
  args: {
    classModifier: "error",
    error: "Titre du message",
    "aria-errormessage": undefined,
    value: undefined,
  },
  argTypes: {
    "aria-errormessage": {
      control: { type: "date" },
    },
  },
};
