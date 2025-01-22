import type { Args } from "@storybook/html";

import {
  div,
  dialog,
  svg,
  header,
  footer,
  section,
  h2,
  span,
  plorem,
} from "../utils";

import { render as renderButton } from "../Button/render";

export const renderDialog = (args: Args) => {
  const svgClose = svg({
    class: "injected-svg",
    width: "32",
    height: "32",
    viewBox: "0 -960 960 960",
    xmlns: "http://www.w3.org/2000/svg",
    path: "m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z",
  });

  const svgTitle = svg({
    width: "32",
    height: "32",
    viewBox: "0 -960 960 960",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    role: "graphics-document",
    path: "M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z",
  });

  const closeHeaderButton = renderButton({
    variant: "ghost",
    label: svgClose.outerHTML,
    onclick: "document.querySelector('.af-modal').close()",
    "aria-label": "Fermer la boite de dialogue",
    type: "button",
  });

  const title = h2([args.title], { class: "af-modal__header-title-heading" });
  const subtitle = span([args.subtitle], {
    class: "af-modal__header-title-subtitle",
  });

  const headerTitle = div([title, subtitle], {
    class: "af-modal__header-title",
  });

  headerTitle.innerHTML = svgTitle.outerHTML + headerTitle.innerHTML;

  const headerModal = header([closeHeaderButton, headerTitle], {
    class: "af-modal__header",
  });
  const contentModal = section([plorem(), plorem()], {
    class: "af-modal__body",
  });

  const cancelButton = renderButton({
    variant: "secondary",
    label: args.cancelTitle,
    onclick: "document.querySelector('.af-modal').close()",
    "aria-label": "Fermer la boite de dialogue",
    type: "button",
  });

  const submitButton = renderButton({
    variant: "primary",
    label: args.submitTitle,
    onclick: "console.log('Submit OK')",
    type: "button",
  });

  const footerModal = footer([cancelButton, submitButton], {
    class: "af-modal__footer",
  });
  const afModalContent = div([headerModal, contentModal, footerModal], {
    class: "af-modal__content",
  });

  const afModalDialog = div([afModalContent], {
    class: "af-modal__dialog",
  });

  return dialog([afModalDialog], { class: "af-modal" });
};

export const render = (args: Args) => {
  const openButton = renderButton({
    label: "Open the modal",
    variant: "primary",
    autofocus: "true",
    onclick: "document.querySelector('.af-modal').showModal()",
  });
  /* container.innerHTML = `
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
    <div class="af-modal__actions ${
      args.fullWidthButtons ? "af-modal__actions--fullWidth" : ""
    }">
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
  return container; */

  return div([openButton, renderDialog(args)]);
};
