import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Text.client.scss";
import "../../InputError/InputError.client.scss";

const meta: Meta = {
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "Your name",
    disabled: false,
    required: true,
    isOnError: false,
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
  title: "Look-and-feel/Components/Form/Input/Text",
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
  if (args.isOnError) input.className += " af-form__input-text--error";
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

const getError = (args: Args) => {
  const alert = document.createElement("div");
  alert.className = `af-input-error`;
  alert.innerHTML = `
        <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
        ${args.title && `<span class="af-input-error__message">${args.title}</span>`}
    `;

  return alert;
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

export const TextOnErrorStory: StoryObj = {
  name: "Text on error",
  render: (args) => {
    const container = getContainer();
    const input = getInput(args);
    const label = getLabel(args);

    const description = getDescription(args);
    const error = getError(args);

    container.appendChild(label);
    container.appendChild(description);
    container.appendChild(input);
    container.appendChild(error);

    return container;
  },
  args: {
    isOnError: true,
    description: "Description",
    title: "Error Message",
  },
};
