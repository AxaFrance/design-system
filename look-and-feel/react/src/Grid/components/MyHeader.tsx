/* eslint-disable react/no-multi-comp */
import person from "@material-symbols/svg-400/outlined/person-fill.svg";
import lock from "@material-symbols/svg-400/outlined/lock-fill.svg";
import { Header } from "../../Layout/Header";
import { Button, ButtonVariants, Svg } from "../..";

export const MyHeader = () => (
  <Header
    defaultActiveLink={0}
    rightItem={[
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant={ButtonVariants.secondary}
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant={ButtonVariants.ghost}
      >
        Mon Profil
      </Button>,
    ]}
  >
    <a
      key="MES CONTRATS link"
      className="af-navbar-item__link"
      href="/mes-contrats"
    >
      MES CONTRATS
    </a>
    <a
      key="MES AVANTAGES link"
      className="af-navbar-item__link"
      href="/mes-avantages"
    >
      MES AVANTAGES
    </a>
    <a
      key="MES DOCUMENTS link"
      className="af-navbar-item__link"
      href="/mes-documents"
    >
      MES DOCUMENTS
    </a>
  </Header>
);
