import type { Meta, StoryObj } from "@storybook/html";
import "../../../common/grid.scss";
import "../../../common/reboot.scss";
import "../../core/FormCore.agent.scss";
import "./Text.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Form/Input/Text",
};

export default meta;

const MODIFIERS = ["", "required", "disabled"];
const MESSAGE_TYPES = ["error", "success", "warning"];
const INPUT_TYPES = ["text", "email", "password"];

export const TextInputStory: StoryObj = {
  name: "TextInput",
  render: (args) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "row af-form__group";
    if (args.classModifier) {
      rowDiv.className += ` af-form__group--${args.classModifier}`;
    }

    const labelColDiv = document.createElement("div");
    labelColDiv.className = "col-md-2";

    const label = document.createElement("label");
    label.className = ["af-form__group-label"].join(" ");
    label.htmlFor = "nameid";
    label.textContent = args.label;

    const inputColDiv = document.createElement("div");
    inputColDiv.className = "col-md-10";

    const inputDiv = document.createElement("div");
    inputDiv.className = [
      "af-form__text",
      args.forceDisplayMessage ? `af-form__text--${args.messageType}` : "",
    ].join(" ");

    const input = document.createElement("input");
    input.className = [
      "af-form__input-text",
      args.classModifier ? `af-form__input-text--${args.classModifier}` : "",
    ].join(" ");
    input.id = "nameid";
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = "name";
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;

    const small = document.createElement("small");
    small.className = args.forceDisplayMessage
      ? `af-form__message af-form__message--${args.messageType}`
      : "af-form__help";

    if (args.forceDisplayMessage) {
      const spanGlyphicon = document.createElement("span");
      spanGlyphicon.className = "glyphicon glyphicon-exclamation-sign";

      const spanText = document.createElement("span");
      spanText.className = `af-form__${args.messageType}-text`;
      spanText.textContent = args.message;
      small.appendChild(spanGlyphicon);
      small.appendChild(spanText);
    } else {
      small.textContent = args.helpMessage;
    }

    inputDiv.appendChild(input);

    labelColDiv.appendChild(label);

    inputColDiv.appendChild(inputDiv);
    inputColDiv.appendChild(small);

    rowDiv.appendChild(labelColDiv);
    rowDiv.appendChild(inputColDiv);

    return rowDiv;
  },
  args: {
    classModifier: "",
    value: "John Doe",
    placeholder: "Your name",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    type: INPUT_TYPES[0],
    label: "Your name",
    message: "Saisie incorrecte",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MESSAGE_TYPES[0],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
    messageType: {
      options: MESSAGE_TYPES,
      control: { type: "select" },
    },
    type: {
      options: INPUT_TYPES,
      control: { type: "select" },
    },
  },
};
