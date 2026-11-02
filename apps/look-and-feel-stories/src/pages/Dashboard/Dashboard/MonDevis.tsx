import {
  Button,
  Card,
  ClickItem,
  Heading,
  Icon,
  List,
} from "@axa-fr/canopee-react/client";
import directionCar from "@material-symbols/svg-400/outlined/directions_car-fill.svg";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import addCircle from "@material-symbols/svg-400/rounded/add_circle-fill.svg";
import localHospital from "@material-symbols/svg-400/sharp/local_hospital-fill.svg";

export const MonDevis = () => (
  <Card variant="unstyled vertical">
    <Heading level={3}>Mon devis en 1 clic</Heading>
    <List>
      <ClickItem variant="small" title="Assurance auto" icon={directionCar} />
      <ClickItem variant="small" title="Assurance habitation" icon={home} />
      <ClickItem
        variant="small"
        title="Compte bancaire"
        icon={accountBalance}
      />
      <ClickItem variant="small" title="Assurance vie" icon={localHospital} />
      <Button variant="tertiary" iconLeft={<Icon src={addCircle} />}>
        Voir tous les produits
      </Button>
    </List>
  </Card>
);
