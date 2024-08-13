import type { Meta, StoryObj } from "@storybook/html";
import "./Modal.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Modal",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("dialog");
    container.className = "af-modal";
    container.innerHTML = `
    <div class="af-modal__top">
      ${args.iconTitle ? args.iconTitle : ""}
      <h2 class="af-modal__top-title">
        <div class="af-modal__top-title-text">${args.title}</div>
        ${
          args.hasCloseBtn
            ? `<button
              class="af-modal__top-title-close-btn"
              type="button"
              aria-label="close"
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10gnm35-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
              >
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </svg>
            </button>`
            : ""
        }
      </h2>
    </div>
    <div class="af-modal__content">
      Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur
      vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.
    </div>
    <div class="af-modal__actions ${args.fullWidthButtons ? "af-modal__actions--fullWidth" : ""}">
    ${
      args.actions?.primary
        ? `<button class="af-btn-client af-btn-client--primary" type="button">
        ${args.actions?.primary.text}</button>`
        : ""
    }
    ${
      args.actions?.secondary
        ? `<button class="af-btn-client af-btn-client--secondary" type="button">
        ${args.actions?.secondary.text}</button>`
        : ""
    }
    ${
      args.actions?.tertiary
        ? `<button class="af-btn-client af-btn-client--tertiary" type="button">
        ${args.actions?.tertiary.text}</button>`
        : ""
    }
    </div>
  `;
    if (args.isOpen) {
      container.setAttribute("open", "");
    } else {
      container.removeAttribute("open");
    }
    return container;
  },
  args: {
    isOpen: true,
    hasCloseBtn: true,
    onClose: () => true,
    title: "Modal title",
    iconTitle: null,
    fullWidthButtons: false,
    actions: {
      primary: { text: "Save", callback: () => true },
      secondary: { text: "Cancel", callback: () => true },
      tertiary: { text: "Reset", callback: () => true },
    },
  },
};
