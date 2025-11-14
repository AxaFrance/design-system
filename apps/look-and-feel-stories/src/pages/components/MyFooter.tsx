// eslint-disable-next-line import/no-extraneous-dependencies
import { Footer } from "@axa-fr/design-system-apollo-react/lf";

export const MyFooter = () => (
  <Footer
    links={[
      {
        link: "https://www.axa.fr/qui-sommes-nous.html",
        text: "À propos",
      },
      {
        link: "https://www.axa.fr/configuration-securite/mentions-legales.html",
        text: "Mentions légales",
      },
      {
        link: "https://www.axa.fr/configuration-securite/donnees-personnelles.html",
        text: "Données personnelles",
      },
      {
        link: "https://www.axa.fr/configuration-securite/politique-cookies.html",
        text: "Cookies",
      },
    ]}
    socialMedias={[
      { icon: "facebook", link: "https://www.facebook.com/axafrance" },
      { icon: "twitter", link: "https://twitter.com/AXAFrance" },
      {
        icon: "youtube",
        link: "https://www.youtube.com/user/AXAFranceChaine",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/axa-france/",
      },
    ]}
    copyright={`@AXA ${new Date().getFullYear()} - Tous droits réservés`}
    expandLinkText="Liens utiles"
  />
);
