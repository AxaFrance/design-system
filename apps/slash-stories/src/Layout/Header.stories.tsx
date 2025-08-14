import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
import { Meta, StoryObj } from "@storybook/react";

import { Header, Infos, Name, User } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
};

export default meta;

export const HeaderWithName: StoryObj<typeof Header> = {
  args: {
    children: (
      <Name
        alt="Logo React"
        img={logo}
        onClick={() => {}}
        subtitle="Baseline"
        title="Nom de l'application"
      />
    ),
  },
};

export const HeaderWithNameAndInfos: StoryObj<typeof Header> = {
  args: {
    children: (
      <>
        <Name
          alt="Logo React"
          img={logo}
          onClick={() => {}}
          subtitle="Baseline"
          title="Nom de l'application"
        />
        <Infos
          infos={[
            { word: "Customer :", definition: "0123456789 - NOM" },
            { word: "Wallet:", definition: "000123456789" },
            { word: "Status :", definition: "New business" },
          ]}
        />
      </>
    ),
  },
};

export const HeaderWithNameUserAndInfos: StoryObj<typeof Header> = {
  args: {
    children: (
      <>
        <Name
          alt="Logo React"
          img={logo}
          onClick={() => {}}
          subtitle="Baseline"
          title="Nom de l'application"
        />
        <Infos
          infos={[
            { word: "Customer :", definition: "0123456789 - NOM" },
            { word: "Wallet:", definition: "000123456789" },
            { word: "Status :", definition: "New business" },
          ]}
        />
        <User
          name="Pierre Martin"
          profile="profile"
          title="Voir mon profil"
          onClick={({ event }) => {
            event.preventDefault();
          }}
          href="/#"
        />
      </>
    ),
  },
};
