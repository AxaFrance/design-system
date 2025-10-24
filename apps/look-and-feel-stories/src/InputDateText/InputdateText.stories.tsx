import {
  InputDateText,
  itemMessageVariants,
} from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof InputDateText> = {
  component: InputDateText,
  title: "Components/Form/Input/InputDateText",
  args: {
    value: "",
    label: "Date de naissance",
    placeholder: "JJ/MM/AAAA",
    helper: "Date de naissance au format JJ/MM/AAAA",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
    description: "Saisissez votre date",
    buttonLabel: "En savoir plus",
    sideButtonLabel: "Modifier",
    message: "",
  },
  argTypes: {
    messageType: {
      options: Object.values(itemMessageVariants),
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputDateText>;

const render = ({ ...args }: React.ComponentProps<typeof InputDateText>) => {
  const [state, setState] = useState(args.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return <InputDateText {...args} value={state} onChange={handleChange} />;
};

export const InputDateTextPlaygroundStory: Story = {
  name: "Playground",
  render,
};
