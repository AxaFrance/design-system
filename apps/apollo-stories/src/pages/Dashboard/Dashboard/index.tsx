import {
  CardMessage,
  ColumnsLayout,
  MainLayout,
} from "@axa-fr/canopee-react/prospect";
import { LayoutDemo } from "../../../layouts/LayoutDemo/LayoutDemo";
import { OffreMoment } from "./OffreMoment";
import { MonConseiller } from "./MonConseiller";
import { MonDevis } from "./MonDevis";
import { Cotisations } from "./Cotisations";
import { MesContrats } from "./MesContrats";
import { AllerPlusLoin } from "./AllerPlusLoin";

export const Dashboard = () => (
  <LayoutDemo title="">
    <MainLayout.Top className="grid">
      <CardMessage
        title="This is a title"
        text="I am the text of the card message"
        variant="error"
      />
    </MainLayout.Top>
    <ColumnsLayout headingProps={{ children: "Bonjour Marion Clarentierre" }}>
      <ColumnsLayout.Left>
        <OffreMoment />
        <MonConseiller />
        <MonDevis />
      </ColumnsLayout.Left>

      <ColumnsLayout.Content>
        <Cotisations />
        <MesContrats />
        <AllerPlusLoin />
      </ColumnsLayout.Content>
    </ColumnsLayout>
  </LayoutDemo>
);
