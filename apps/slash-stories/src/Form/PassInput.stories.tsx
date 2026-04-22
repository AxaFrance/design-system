import {
  HelpButton,
  MessageTypes,
  PassInput,
} from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/Pass",
  component: PassInput,
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
    id: "pass-id",
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
});

export const PassInputStory = meta.story({
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
});

export const PassInputWithChildrenStory = meta.story({
  name: "PassInput with help button",
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
        >
          <HelpButton mode="hover">Help</HelpButton>
        </PassInput>
      </form>
    );
  },
});
