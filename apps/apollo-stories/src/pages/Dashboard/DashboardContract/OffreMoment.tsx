import { CardMarketing } from "@axa-fr/canopee-react/prospect";

export const OffreMoment = () => (
  <CardMarketing
    image={{
      src: "https://dummyimage.com/282x130/edf/00008F",
      alt: "Assurez votre habitation dès maintenant",
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
