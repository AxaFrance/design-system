import type { Meta, StoryObj } from "@storybook/html";
import "./Text.client.scss";

const meta: Meta = {
  title: "Client/Components/Form/Input/Text",
};

export default meta;

export const TextStory: StoryObj = {
  name: "Text",
  render: (args) => {
    const input = document.createElement("input");
    input.id = "nameid";
    input.name = "name";
    input.className = "af-form__input-text";
    input.placeholder = args.placeholder;
    input.type = args.type;
    input.value = args.value;
    input.disabled = args.disabled;
    input.required = args.required;

    const container = document.createElement("div");
    container.className = "af-form__input-container";

    const label = document.createElement("label");
    label.htmlFor = "nameid";
    label.className = "af-form__input-label";
    label.textContent = args.label;

    if (args.required) {
      const required = document.createElement("span");
      required.textContent = " *";
      label.appendChild(required);
    }

    container.appendChild(label);
    container.appendChild(input);

    return container;
  },
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "Your name",
    disabled: false,
    required: true,
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
};
