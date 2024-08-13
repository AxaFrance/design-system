import type { Meta, StoryObj } from "@storybook/html";
import "./Text.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Form/Input/Text",
};

export default meta;

const MODIFIERS = ["", "required", "disabled"];
const INPUT_TYPES = ["text", "email", "password"];

export const TextStory: StoryObj = {
  name: "Text",
  render: (args) => {
    const input = document.createElement("input");
    input.className = "af-form__input-text";
    input.id = "nameid";
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = "name";
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;

    const classModifiers = args.classModifier.filter(
      (classModifier: string) => classModifier !== "",
    );
    if (classModifiers) {
      input.className += classModifiers
        .map(
          (classModifier: string) => ` af-form__input-text--${classModifier}`,
        )
        .join(" ");
    }

    return input;
  },
  args: {
    classModifier: [] as string[],
    value: "John Doe",
    placeholder: "Your name",
    readOnly: false,
    disabled: false,
    autoFocus: false,
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
