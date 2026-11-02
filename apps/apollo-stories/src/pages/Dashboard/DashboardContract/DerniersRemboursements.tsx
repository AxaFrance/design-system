import { Button, PatternWithAction } from "@axa-fr/canopee-react/prospect";
import { Remboursements } from "./Remboursements";

export const DerniersRemboursements = () => (
  <PatternWithAction
    headingProps={{ children: "Mes derniers remboursements de santé" }}
  >
    <PatternWithAction.Action>
      <Button variant="secondary">Afficher mes documents</Button>
    </PatternWithAction.Action>

    <Remboursements />
  </PatternWithAction>
);
