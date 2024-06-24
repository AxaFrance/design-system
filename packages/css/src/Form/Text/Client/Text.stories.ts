import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Text.client.scss";

const meta: Meta = {
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
  title: "Client/Components/Form/Input/Text",
};

export default meta;

const getContainer = () => {
  const container = document.createElement("div");
  container.className = "af-form__input-container";

  return container;
};

const getInput = (args: Args) => {
  const input = document.createElement("input");
  input.id = "nameid";
  input.name = "name";
  input.className = "af-form__input-text";
  input.placeholder = args.placeholder;
  input.type = args.type;
  input.value = args.value;
  input.disabled = args.disabled;
  input.required = args.required;

  return input;
};

const getLabel = (args: Args) => {
  const label = document.createElement("label");
  label.htmlFor = "nameid";
  label.className = "af-form__input-label";
  label.textContent = args.label;

  if (args.required) {
    const required = document.createElement("span");
    required.textContent = " *";
    label.appendChild(required);
  }

  return label;
};

const getDescription = (args: Args) => {
  const description = document.createElement("span");
  description.className = "af-form__input-description";
  description.textContent = args.description;

  return description;
};

export const TextStory: StoryObj = {
  name: "Text",
  render: (args) => {
    const container = getContainer();
    const input = getInput(args);
    const label = getLabel(args);

    container.appendChild(label);
    container.appendChild(input);

    return container;
  },
};

export const TextWithDescriptionStory: StoryObj = {
  name: "Text with description",
  render: (args) => {
    const container = getContainer();
    const input = getInput(args);
    const label = getLabel(args);
    const description = getDescription(args);

    container.appendChild(label);
    container.appendChild(description);
    container.appendChild(input);

    return container;
  },
  args: {
    description: "Description",
  },
};
