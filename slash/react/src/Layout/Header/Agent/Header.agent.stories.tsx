import { Meta, StoryObj } from "@storybook/react";
import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";

import { HeaderAgent } from "./Header.agent";
import { Infos } from "./Infos/Infos";
import { Name } from "./Name/Name";

const meta: Meta<typeof HeaderAgent> = {
  component: HeaderAgent,
  title: "Slash/Components/Header",
};

export default meta;

export const HeaderWithName: StoryObj<typeof HeaderAgent> = {
  name: "Header With Name",
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

export const HeaderWithNameAndInfos: StoryObj<typeof HeaderAgent> = {
  name: "Header With Name And Infos",
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
