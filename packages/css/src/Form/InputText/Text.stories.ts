import type { Meta, StoryObj } from "@storybook/html";
import "./InputText.agent.scss";

const meta: Meta = {
  title: "Components/Form/Input/Text",
};

export default meta;

const MODIFIERS = ["", "required", "disabled"];
const INPUT_TYPES = ["text", "email", "password"];

export const TextStory: StoryObj = {
  name: "Text",
  render: (args) => {
    const inputDefaultClassNames: string[] = args.className
      ? args.className.split(" ")
      : ["af-form__input-text"];

    const input = document.createElement("input");
    input.className = inputDefaultClassNames.join(" ");
    input.id = args.id;
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = args.name;
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;
    input.ariaDisabled = args["aria-disabled"];

    const classModifiers = args.classModifier.filter(
      (classModifier: string) => classModifier !== "",
    );
    if (classModifiers) {
      const lastInputClassName: string =
        inputDefaultClassNames[inputDefaultClassNames.length - 1];
      input.className += classModifiers
        .map(
          (classModifier: string) => ` ${lastInputClassName}--${classModifier}`,
        )
        .join(" ");
    }

    return input;
  },
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
    type: {
      options: INPUT_TYPES,
      control: { type: "select" },
    },
  },
};
