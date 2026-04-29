import { Infos } from "@axa-fr/canopee-react/distributeur";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  component: Infos,
  title: "Components/Header/Infos",
});

export const Default = meta.story({
  args: {
    infos: [
      { word: "Customer :", definition: "0123456789 - NOM" },
      { word: "Wallet:", definition: "000123456789" },
      { word: "Status :", definition: "New business" },
    ],
  },
});
