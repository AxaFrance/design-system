import { Card, Heading, List, ClickItem } from "@axa-fr/canopee-react/prospect";

import speakerNotes from "@material-symbols/svg-400/sharp/speaker_notes-fill.svg";
import localHospital from "@material-symbols/svg-400/sharp/local_hospital-fill.svg";

export const AideEnLigne = () => (
  <Card variant="unstyled vertical">
    <Heading level={3}>Aide en ligne</Heading>
    <List>
      <ClickItem variant="small" title="Consulter la FAQ" icon={speakerNotes} />
      <ClickItem
        variant="small"
        title="Bien préparer une hospitalisation"
        icon={localHospital}
      />
    </List>
  </Card>
);
