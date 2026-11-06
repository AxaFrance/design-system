import { MultiMessage, ColumnsLayout } from "@axa-fr/canopee-react/client";
import { LayoutDemo } from "../../../layouts/LayoutDemo/LayoutDemo";
import { sampleItems } from "../../../components/MultiMessage/render";

import { DerniersRemboursements } from "./DerniersRemboursements";
import { DerniersDocuments } from "./DerniersDocuments";
import { OffreMoment } from "./OffreMoment";
import { MonConseiller } from "./MonConseiller";
import { AideEnLigne } from "./AideEnligne";
import { MesServicesEnLigne } from "./MesServicesEnLigne";
import { DetailContrat } from "./DetailContrat";
import { AllerPlusLoin } from "./AllerPLusLoin";

export const DashboardContract = () => (
  <LayoutDemo backLinkProps={{ href: "/", children: "Retour" }}>
    <ColumnsLayout headingProps={{ children: "Bonjour Marion Clarentierre" }}>
      <ColumnsLayout.Left>
        <OffreMoment />
        <MesServicesEnLigne />
        <AideEnLigne />
        <MonConseiller />
      </ColumnsLayout.Left>

      <ColumnsLayout.Content>
        <MultiMessage items={sampleItems} defaultActiveIndex={0} />
        <DetailContrat />
        <DerniersRemboursements />
        <DerniersDocuments />
        <AllerPlusLoin />
      </ColumnsLayout.Content>
    </ColumnsLayout>
  </LayoutDemo>
);
