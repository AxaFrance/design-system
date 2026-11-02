import {
  Card,
  ContentItemMono,
  PatternMozaicGrid,
  PatternWithAction,
} from "@axa-fr/canopee-react/prospect";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

export const DetailContrat = () => (
  <PatternWithAction headingProps={{ children: "Détail de mon contrat" }}>
    <PatternMozaicGrid data-cols-mobile={4} data-cols-desktop-small={3}>
      <Card>
        <ContentItemMono
          type="icon"
          title="Texte principal"
          subtitle1="Texte secondaire"
          iconProps={{
            src: accountBalance,
          }}
        />
      </Card>
      <Card>
        <ContentItemMono
          type="icon"
          title="Texte principal"
          subtitle1="Texte secondaire"
          iconProps={{
            src: accountBalance,
          }}
        />
      </Card>
      <Card>
        <ContentItemMono
          type="icon"
          title="Texte principal"
          subtitle1="Texte secondaire"
          iconProps={{
            src: accountBalance,
          }}
        />
      </Card>
      <Card>
        <ContentItemMono
          type="icon"
          title="Texte principal"
          subtitle1="Texte secondaire"
          iconProps={{
            src: accountBalance,
          }}
        />
      </Card>
    </PatternMozaicGrid>
  </PatternWithAction>
);
