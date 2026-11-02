import { Card, DataAgent, Heading } from "@axa-fr/canopee-react/prospect";

export const MonConseiller = () => (
  <Card variant="unstyled vertical">
    <Heading level={3}>Mon conseiller</Heading>
    <DataAgent
      agentProps={{
        picture: "https://dummyimage.com/48/48/fff&text=A",
        subtitle: "AXA Assurance & Banque",
        title: "Michel Lhote",
        type: "picture",
      }}
      variant="compact"
    />
  </Card>
);
