import type { Args } from "@storybook/html";
import { input, type Tattributes } from "../../utils";

export const getContainer = () => {
  const container = document.createElement("div");
  container.className = "af-form__input-container";

  return container;
};

export const getInput = (args: Args) => {
  const setClassName = (className: string, error: string) => {
    let newClassName = `af-form__input-text${className ? ` ${className}` : ""}`;

    if (error) {
      newClassName += " af-form__input-text--error";
    }

    return newClassName;
  };

  return input({
    id: args.id,
    name: args.name,
    class: setClassName(args.class, args.error),
    "aria-errormessage": `error-${args.id}`,
    "aria-invalid": `${Boolean(args.error)}`,
    placeholder: args.placeholder,
    type: args.type,
    value: args.value,
    disabled: args.disabled,
    required: args.required,
  } as Tattributes);
};

export const getLabel = (args: Args) => {
  const label = document.createElement("label");
  label.htmlFor = args.id;
  label.className = "af-form__input-label";
  label.textContent = args.label;

  if (args.required) {
    const required = document.createElement("span");
    required.textContent = " *";
    label.appendChild(required);
  }

  return label;
};

export const getDescription = (args: Args) => {
  const description = document.createElement("span");
  description.className = "af-form__input-description";
  description.textContent = args.description;

  return description;
};

export const getError = (args: Args) => {
  const alert = document.createElement("div");
  alert.className = `af-input-error`;
  alert.innerHTML = `
          <svg class="af-input-error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorOutlineIcon"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>
          ${
            args.error &&
            `<span id="error-${args.id}" class="af-input-error__message">${args.error}</span>`
          }
      `;

  return alert;
};

export const getKnowMore = () => {
  const knowMore = document.createElement("button");
  knowMore.className = "af-btn-client af-btn-client--ghost af-form__input-more";
  knowMore.innerHTML = `<svg focusable="false" aria-hidden="true" viewBox="0 -960 960 960">
      <path d="M453-280h60v-240h-60v240Zm26.98-314q14.02 0 23.52-9.2T513-626q0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2Zm.29 514q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"></path>
    </svg>
    En savoir plus`;

  return knowMore;
};

export const getHelper = (helper: string) => {
  const helperElement = document.createElement("span");
  helperElement.className = "af-form__input-helper";
  helperElement.innerHTML = helper;

  return helperElement;
};

export const render = (args: Args) => {
  const container = getContainer();

  if (args.label || args.description || args.buttonLabel) {
    const labelContainer = document.createElement("div");
    labelContainer.className = "af-form__label-container";

    if (args.label) {
      labelContainer.appendChild(getLabel(args));
    }
    if (args.description) {
      labelContainer.appendChild(getDescription(args));
    }
    if (args.buttonLabel) {
      labelContainer.appendChild(getKnowMore());
    }

    container.appendChild(labelContainer);
  }

  container.appendChild(getInput(args));

  if (args.helper) {
    container.appendChild(getHelper(args.helper));
  }
  if (args.error) {
    container.appendChild(getError(args));
  }

  return container;
};
