import { MessageTypes, PassInput } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";

export default {
  title: "Components/Form/Input/Pass",
  component: PassInput,
  args: { onChange: fn() },
} as Meta;

export const PassInputStory: StoryObj<typeof PassInput> = {
  name: "PassInput",
  render: ({ value: initValue, onChange, ...args }) => {
    const [value, setValue] = useState(initValue);
    const [score, setScore] = useState<number>(0);
    return (
      <form className="af-form" name="myform">
        <PassInput
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
            setScore(Math.floor(Math.random() * 5));
          }}
          score={score.toString()}
        />
      </form>
    );
  },
  args: {
    label: "Password",
    helpMessage: "8 caractères minimum",
    required: true,
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    message: "",
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    autoFocus: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    name: "password",
    id: "uniqueid",
  },
  argTypes: {
    messageType: {
      options: [
        MessageTypes.error,
        MessageTypes.success,
        MessageTypes.warning,
        null,
      ],
      control: {
        type: "select",
      },
    },
    classModifier: {
      options: ["required"],
      control: {
        type: "inline-check",
      },
    },
    onChange: { action: "onChange" },
  },
};
