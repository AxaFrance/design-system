import {
  Card,
  Heading,
  ClickItem,
  AccordionCore,
} from "@axa-fr/canopee-react/client";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import attachMoney from "@material-symbols/svg-400/sharp/attach_money-fill.svg";
import serviceToolbox from "@material-symbols/svg-400/sharp/service_toolbox-fill.svg";

export const MesServicesEnLigne = () => (
  <Card variant="unstyled vertical">
    <Heading level={3}>Mes services en ligne</Heading>
    <AccordionCore
      summary="Mes opérations"
      className="af-apollo-accordion--plain"
    >
      <ClickItem
        variant="small"
        title="Effectuer un versement"
        icon={attachMoney}
      />
      <ClickItem
        variant="small"
        title="Effectuer un retrait partiel"
        icon={attachMoney}
      />
      <ClickItem
        variant="small"
        title="Effectuer un retrait total"
        icon={attachMoney}
      />
      <ClickItem
        variant="small"
        title="Demander un retrait anticipé"
        icon={attachMoney}
      />
    </AccordionCore>
    <AccordionCore className="af-apollo-accordion--plain" summary="Mon contrat">
      <ClickItem
        variant="small"
        title="Télécharger mon contrat"
        icon={accountBalance}
      />
      <ClickItem
        variant="small"
        title="Consulter les conditions générales"
        icon={accountBalance}
      />
      <ClickItem
        variant="small"
        title="Consulter mes relevés"
        icon={accountBalance}
      />
    </AccordionCore>
    <AccordionCore
      className="af-apollo-accordion--plain"
      summary="Autres services"
    >
      <ClickItem
        variant="small"
        title="Demander un service"
        icon={serviceToolbox}
      />
      <ClickItem
        variant="small"
        title="Consulter les services disponibles"
        icon={serviceToolbox}
      />
    </AccordionCore>
  </Card>
);
