import type { Meta, StoryObj } from "@storybook/react";
import { InputPhone } from "@axa-fr/design-system-apollo-react";
import { useState } from "react";
import { flagsList } from "./FlagUtils.tsx";

const meta: Meta<typeof InputPhone> = {
  component: InputPhone,
  title: "Components/Form/Input/InputPhone",
  args: {
    label: "Label",
    helper: "Informations complémentaires",
    name: "name",
    id: "nameid",
    countryCodeOptions: flagsList,
    placeholder: "07 89 10 11 12",
    disabled: false,
    required: true,
    showSelect: false,
    className: "",
    type: "text",
    buttonLabel: "Hello",
    sideButtonLabel: "Modifier",
    description: "Description",
    pattern: "[0-9]{10}",
    classModifier: "error",
    error: "Titre du Message",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof InputPhone>;

export const InputPhonePlaceholderStory: Story = {
  name: "Text placeholder",
  render: ({ onChange, ...args }) => {
    const [value, setValue] = useState("");
    return (
      <InputPhone
        onChange={onChange}
        value={value}
        onChangeInput={setValue}
        {...args}
      />
    );
  },
};
