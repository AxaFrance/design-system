import { CardMarketing } from "@axa-fr/canopee-react/client";

export const OffreMoment = () => (
  <CardMarketing
    image={{
      src: "https://dummyimage.com/282x130/edf/00008F",
      alt: "Assurez votre habitation dès maintenant",
    }}
    title="Assurez votre habitation dès maintenant"
    text="Découvrez notre offre et obtenez un tarif."
    linkProps={{ href: "/offre", children: "Découvrir notre offre" }}
  />
);
