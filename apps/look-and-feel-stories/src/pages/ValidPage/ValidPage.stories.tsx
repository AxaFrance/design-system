import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ValidPage } from "@axa-fr/canopee-react/client";
import type { ComponentProps } from "react";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import alternateEmail from "@material-symbols/svg-400/rounded/alternate_email-fill.svg";
import arrowLeftAlt from "@material-symbols/svg-400/outlined/arrow_left_alt.svg";
import { LayoutDemo } from "../../layouts/LayoutDemo/LayoutDemo";

const meta: Meta = {
  title: "Pages/Valid Page",
  parameters: { layout: "fullscreen" },
  argTypes: {
    showAgent: { control: "boolean" },
  },
};

export default meta;

const dataAgentProps = {
  agentProps: {
    picture: "https://dummyimage.com/48/48/fff&text=A",
    title: "Michel Lhote",
    subtitle: "AXA Assurance & Banque",
    type: "picture",
  },
  agentContractProps: {
    title: "Contrat rattaché",
    subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
    type: "stick",
  },
  contents: [
    {
      type: "icon",
      icon: accountBalance,
      subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
      title: "",
    },
    {
      type: "icon",
      icon: accountBalance,
      subtitle1: "01 23 34 45 67",
      title: "",
    },
    {
      type: "icon",
      icon: accountBalance,
      subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      title: "",
    },
  ],
  clickContents: [
    {
      variant: "large",
      icon: alternateEmail,
      title: "Nous contacter",
    },
    {
      variant: "small",
      icon: accountBalance,
      title: "Prendre rendez-vous",
    },
    {
      variant: "small",
      icon: accountBalance,
      title: "Voir le site-web",
    },
  ],
  texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601",
  isCompact: false,
} satisfies ComponentProps<typeof ValidPage>["dataAgentProps"];

type StoryProps = ComponentProps<typeof ValidPage> & {
  showAgent: boolean;
};

const Demo = ({ headingProps, showAgent, linkProps }: StoryProps) => (
  <LayoutDemo title="Valid Page Title">
    <ValidPage
      headingProps={headingProps}
      dataAgentProps={showAgent ? { ...dataAgentProps } : undefined}
      linkProps={linkProps}
    >
      <p>
        Vous recevrez dans quelques instants un e-mail récapitulatif avec le
        détail de votre tarif.
      </p>
      <p>
        Votre Conseiller AXA vous contactera rapidement pour confirmer vos
        informations et finaliser votre contrat.
      </p>
      <p>
        Vous souhaitez prendre les devants ? N&apos;hésitez pas à le contacter
        directement !
      </p>
    </ValidPage>
  </LayoutDemo>
);

export const Playground: StoryObj<StoryProps> = {
  render: Demo,
  args: {
    headingProps: {
      title: "Bonjour Samuel",
    },
    showAgent: true,
    linkProps: {
      href: "#",
      children: "Retour à l'accueil",
      leftIcon: <Icon src={arrowLeftAlt} />,
    },
  },
};
