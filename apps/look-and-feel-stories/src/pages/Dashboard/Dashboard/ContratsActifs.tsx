import {
  Card,
  ClickItem,
  ContentItemDuo,
  ContentItemMono,
  PatternMozaicFree,
} from "@axa-fr/canopee-react/client";
import directionCar from "@material-symbols/svg-400/outlined/directions_car-fill.svg";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import personalInjury from "@material-symbols/svg-400/sharp/personal_injury-fill.svg";

export const ContratsActifs = () => (
  <PatternMozaicFree>
    <Card variant="vertical">
      <ClickItem
        title="Assurance accident de la vie"
        icon={personalInjury}
        subtitle="N°1234567891011121"
      />
      <ContentItemMono title="Protection Familiale Intégrale" type="stick" />
    </Card>
    <Card variant="vertical">
      <ClickItem
        title="Assurance habitation"
        icon={home}
        subtitle="N°1234567891011121"
      />
      <ContentItemMono
        title="28 bis rue des lila jaune, 92 000 Nanterre"
        type="stick"
      />
    </Card>
    <Card variant="vertical">
      <ClickItem
        title="Assurance auto"
        icon={directionCar}
        subtitle="Sous-titre"
      />
      <ContentItemDuo label="Tous risques" value="BMW - EE 224 TT" />
    </Card>
  </PatternMozaicFree>
);
