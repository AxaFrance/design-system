import { Heading, TabBar } from "@axa-fr/canopee-react/client";
import { ContratsActifs } from "./ContratsActifs";
import { AnciensContrats } from "./AnciensContrats";

export const MesContrats = () => (
  <section>
    <Heading level={2}>Mes contrats</Heading>
    <TabBar
      items={[
        { title: "Contrats actifs", content: <ContratsActifs /> },
        { title: "Anciens contrats", content: <AnciensContrats /> },
      ]}
    />
  </section>
);
