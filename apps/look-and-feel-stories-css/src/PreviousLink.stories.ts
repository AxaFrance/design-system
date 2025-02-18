import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/PreviousLink/PreviousLink.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Header/PreviousLink",
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const container = document.createElement("div");
    container.className = "af-header-previous-link-container";
    container.innerHTML = `
        <a key="Previous link" class="af-header-previous-link" href="/mes-contrats">
          <svg class="af-header-previous-link__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.19123 7.82522L8.16936 12.8036L6.99998 13.9611L0.0389404 7.00002L6.99998 0.0270996L8.16936 1.19647L3.19123 6.17481H13.9729V7.82522H3.19123Z" fill="#5F5F5F"/>
          </svg>
          <span class="af-header-previous-link__text">Retour à mes contrats</span>
        </a>`;

    return container;
  },
};
