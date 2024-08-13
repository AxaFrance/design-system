import type { Meta, StoryObj } from "@storybook/html";
import "./Footer.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Footer",
};

export default meta;

export const Header: StoryObj = {
  render: () => {
    return `
    <footer class="af-footer">
      <div class="af-footer__footerTop">
        <nav class="af-footer__menuTop" aria-label="Liens utiles">
          <div class="af-footer__menuAboutTrigger">
            <span class="af-footer__menuAboutTriggerText">Liens utiles</span
            ><svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium af-footer__icon af-footer__iconTrigger css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ExpandMoreIcon"
            >
              <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
          </div>
          <div class="af-footer__menuLinks">
            <a
              class="af-footer__linkItem"
              href="https://www.axa.fr/qui-sommes-nous.html"
              target="_blank"
              rel="noreferrer"
              >À propos</a
            ><a
              class="af-footer__linkItem"
              href="https://www.axa.fr/configuration-securite/mentions-legales.html"
              target="_blank"
              rel="noreferrer"
              >Mentions légales</a
            ><a
              class="af-footer__linkItem"
              href="https://www.axa.fr/configuration-securite/donnees-personnelles.html"
              target="_blank"
              rel="noreferrer"
              >Données personnelles</a
            ><a
              class="af-footer__linkItem"
              href="https://www.axa.fr/configuration-securite/politique-cookies.html"
              target="_blank"
              rel="noreferrer"
              >Cookies</a
            >
          </div>
        </nav>
        <nav class="af-footer__footerMenuIcons">
          <a
            aria-label="social media facebook"
            class="af-footer__menuIconLinks"
            href="https://www.facebook.com/axafrance"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              width="24"
              height="24"
              fill="white"              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FacebookIcon"
            >
              <path
                d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
              ></path></svg></a
          ><a
            aria-label="social media twitter"
            class="af-footer__menuIconLinks"
            href="https://twitter.com/AXAFrance"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              width="24"
              height="24"
              fill="white"              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="XIcon"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              ></path></svg></a
          ><a
            aria-label="social media youtube"
            class="af-footer__menuIconLinks"
            href="https://www.youtube.com/user/AXAFranceChaine"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              width="24"
              height="24"
              fill="white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="YouTubeIcon"
            >
              <path
                d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
              ></path></svg></a
          ><a
            aria-label="social media linkedin"
            class="af-footer__menuIconLinks"
            href="https://www.linkedin.com/company/axa-france/"
            target="_blank"
            rel="noopener noreferrer"
            ><svg
              width="24"
              height="24"
              fill="white"              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LinkedInIcon"
            >
              <path
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
              ></path></svg
          ></a>
        </nav>
      </div>
      <div class="af-footer__footerBottom">
        <div class="af-footer__footerBottomWidth">
          <span class="af-footer__textCopyright"
            >@AXA 2024 - Tous droits réservés</span
          >
        </div>
      </div>
    </footer>
    `;
  },
};
