import type { Meta, StoryObj } from "@storybook/html";
import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import "./Footer.scss";
import "../../Grid/Grid.scss";

const meta: Meta = {
  title: "Components/✅ Footer",
};

export default meta;

export const Footer: StoryObj = {
  render: ({ version }) => {
    const footer = document.createElement("footer");

    footer.classList.add("af-grid");
    footer.classList.add("af-footer");

    footer.innerHTML = `
    <img class="af-footer__logo" src="${logo}" aria-hidden="true" />
    <div class="af-footer__copyright">© ${new Date().getFullYear()} AXA Tous droits réservés</div>
    <div class="af-footer__version">Version: ${version}</div>
`;

    return footer;
  },
  args: {
    version: "0.0.0",
  },
  parameters: {
    layout: "fullscreen",
  },
};
