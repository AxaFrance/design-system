import type { Meta, StoryObj } from "@storybook/html";
import "../Button/Button.agent.scss";
import "./Modal.agent.scss";

const meta: Meta = {
  title: "Slash/Components/Modal",
};

export default meta;

const MODIFIERS = [
  { label: "Default", value: "" },
  { label: "Large (lg)", value: "lg" },
  { label: "Small (sm)", value: "sm" },
];

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("dialog");

    const selectClassModifier =
      MODIFIERS.find((m) => m.label === args.classModifier) ?? MODIFIERS[0];

    container.innerHTML = `
        <div class="af-modal__dialog">
            <div class="af-modal__content">
                <div class="af-modal__header">
                    <h4 class="af-modal__header-title">${args.title}</h4>
                    <button class="af-modal__header-close-btn" type="button" aria-label="Close">
                        <svg class="glyphicon glyphicon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <path d="M90.086 0.888l-40.086 40.086-40.086-40.086-9.026 9.026 40.086 40.086-40.086 40.086 9.026 9.026 40.086-40.086 40.086 40.086 9.026-9.026-40.086-40.086 40.086-40.086z"></path>
                        </svg>
                    </button>
                </div>
                <div class="af-modal__body">
                    <p>${args.bodyContent}</p>
                </div>
                <div class="af-modal__footer">                    
                    ${
                      selectClassModifier.value !== "sm"
                        ? `<button class="btn af-btn af-btn--reverse" type="button">${args.cancelButtonText}</button>`
                        : ""
                    }
                    <button class="btn af-btn" type="button">${
                      args.saveButtonText
                    }</button>
                </div>
            </div>
        </div>`;

    container.className += [
      "af-modal",
      selectClassModifier.value ? `af-modal--${selectClassModifier.value}` : "",
    ]
      .join(" ")
      .trim();
    container.open = args.open;

    return container;
  },
  args: {
    open: true,
    title: "Modal Title",
    bodyContent:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    cancelButtonText: "Cancel",
    saveButtonText: "Save",
    classModifier: MODIFIERS[0].label,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS.map((m) => m.label),
      control: { type: "radio" },
    },
  },
};
