import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { SocialMedia } from "./MenuIcons";
import { Link } from "./MenuLink";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Look-and-feel/Components/Footer",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Footer>,
  "links" | "socialMedias" | "copyright" | "expandLinkText"
> & {
  links: Link[];
  socialMedias?: SocialMedia[];
  copyright: string;
  expandLinkText: string;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Footer",
  render: ({ links, socialMedias, copyright, expandLinkText }) => (
    <Footer
      links={links}
      socialMedias={socialMedias}
      copyright={copyright}
      expandLinkText={expandLinkText}
    />
  ),
  args: {
    links: [
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
    ],
    socialMedias: [
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
    ],
    expandLinkText: "Liens utiles",
    copyright: `@AXA ${new Date().getFullYear()} - Tous droits réservés`,
  },
};
