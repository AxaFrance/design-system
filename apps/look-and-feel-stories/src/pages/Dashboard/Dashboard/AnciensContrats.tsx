import {
  Card,
  ClickItem,
  PatternMozaicFree,
} from "@axa-fr/canopee-react/client";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";

export const AnciensContrats = () => (
  <PatternMozaicFree>
    <Card variant="vertical">
      <ClickItem
        title="Assurance habitation"
        icon={home}
        subtitle="Sous-titre"
      />
    </Card>
  </PatternMozaicFree>
);
