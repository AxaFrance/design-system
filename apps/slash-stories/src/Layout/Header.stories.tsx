import logo from "@axa-fr/canopee-css/logo-axa.svg";

import { Header, Infos, Name, User } from "@axa-fr/canopee-react/distributeur";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  component: Header,
  title: "Components/Header",
});
export default meta;

export const HeaderWithName = meta.story({
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
});

export const HeaderWithNameAndInfos = meta.story({
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
});

export const HeaderWithNameUserAndInfos = meta.story({
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
});
