import { Meta, StoryObj } from "@storybook/react";

import { Infos } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof Infos> = {
  component: Infos,
  title: "Components/Header/Infos",
};

export default meta;

export const Default: StoryObj<typeof Infos> = {
  args: {
    infos: [
      { word: "Customer :", definition: "0123456789 - NOM" },
      { word: "Wallet:", definition: "000123456789" },
      { word: "Status :", definition: "New business" },
    ],
  },
};
