import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Footer",
};

export default meta;

export const Primary: StoryObj = {
  render: (args) => {
    const footer = document.createElement("footer");

    footer.className = args.className ?? "af-footer";

    footer.innerHTML = `
    <div class="container-fluid container">
  
        <a class="af-logo" href="${args.href}" title="${args.title}" target="blank">
          <img class="af-logo__brand" src="${args.icon}" alt="${args.alt}" />
        </a>
   
      <div class="af-footer-content">${args.children}</div>
    </div>
`;

    return footer;
  },
  args: {
    href: "https://www.axa.fr/",
    title: "Site Axa",
    icon: logo,
    alt: "Logo Axa",
    children: `© ${new Date().getFullYear()} AXA Tous droits réservés`,
  },
};
