import {
  Button,
  Card,
  ClickItem,
  PatternMozaicGrid,
  PatternWithAction,
} from "@axa-fr/canopee-react/prospect";

export const DerniersDocuments = () => (
  <PatternWithAction headingProps={{ children: "Mes derniers documents" }}>
    <PatternWithAction.Action>
      <Button variant="secondary">Afficher mes documents</Button>
    </PatternWithAction.Action>

    <PatternMozaicGrid data-cols-mobile={4} data-cols-desktop-small={3}>
      <Card>
        <ClickItem
          title="Nom du document"
          subtitle="22 mars 2024"
          tagLabel="Nouveau"
        />
      </Card>
      <Card>
        <ClickItem
          title="Nom du document"
          subtitle="22 mars 2024"
          tagLabel="Nouveau"
        />
      </Card>
      <Card>
        <ClickItem
          title="Nom du document"
          subtitle="22 mars 2024"
          tagLabel="Nouveau"
        />
      </Card>
      <Card>
        <ClickItem
          title="Nom du document"
          subtitle="22 mars 2024"
          tagLabel="Nouveau"
        />
      </Card>
    </PatternMozaicGrid>
  </PatternWithAction>
);
