import type { Args } from "@storybook/html";

import {
  dialog,
  div,
  footer,
  h2,
  header,
  plorem,
  section,
  span,
  svg,
} from "./utils";

import { render as renderButton } from "./TitleRender";

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

  return div([openButton, renderDialog(args)]);
};
