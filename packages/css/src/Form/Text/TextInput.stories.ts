import type { Meta, StoryObj } from "@storybook/html";
import "../../common/grid.scss";
import "../../common/reboot.scss";
import "../core/FormCore.agent.scss";
import "./InputText.agent.scss";

const meta: Meta = {
  title: "Components/Form/Input/TextInput",
};

export default meta;

const MESSAGE_TYPES = ["error", "success", "warning"];
const INPUT_TYPES = ["text", "email", "password"];

export const TextInputStory: StoryObj = {
  name: "TextInput",
  render: (args) => {
    const rowDivDefaultClassNames: string[] = args.className
      ? args.className.split(" ")
      : ["row", "af-form__group"];

    const rowDiv = document.createElement("div");
    rowDiv.className = rowDivDefaultClassNames.join(" ");
    if (args.classModifier) {
      rowDiv.className += ` ${
        rowDivDefaultClassNames[rowDivDefaultClassNames.length - 1]
      }--${args.classModifier}`;
    }

    const labelColDiv = document.createElement("div");
    labelColDiv.className = args.classNameContainerLabel;

    const label = document.createElement("label");
    label.className = ["af-form__group-label"].join(" ");
    label.htmlFor = args.id;
    label.textContent = args.label;

    const inputColDiv = document.createElement("div");
    inputColDiv.className = args.classNameContainerInput;

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
    input.id = args.id;
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.name = args.name;
    input.readOnly = args.readOnly;
    input.disabled = args.disabled;
    input.autofocus = args.autoFocus;
    input.ariaDisabled = args["aria-disabled"];

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
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: INPUT_TYPES[0],
    label: "Your name",
    message: "",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MESSAGE_TYPES[0],
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
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
