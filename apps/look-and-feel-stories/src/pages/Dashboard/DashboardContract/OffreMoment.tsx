import { CardMarketing } from "@axa-fr/canopee-react/client";

export const OffreMoment = () => (
  <CardMarketing
    image={{
      src: "https://dummyimage.com/282x130/edf/00008F",
      alt: "",
    }}
    title="Offre épargne du moment"
    text=""
    linkProps={{
      href: "/offre",
      children: "Découvrir notre offre",
      variant: "button-primary-business",
    }}
  />
);
