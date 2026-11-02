import {
  Button,
  CardMarketing,
  PatternMozaicGrid,
  PatternWithAction,
} from "@axa-fr/canopee-react/client";

export const AllerPlusLoin = () => (
  <PatternWithAction
    headingProps={{ children: "Pour aller plus loin", level: 3 }}
  >
    <PatternWithAction.Action>
      <Button variant="secondary">Afficher mes documents</Button>
    </PatternWithAction.Action>
    <PatternMozaicGrid data-cols-mobile={4} data-cols-desktop-small={3}>
      <CardMarketing
        image={{
          src: "https://dummyimage.com/282x130/edf/00008F",
          alt: "Assurez votre habitation dès maintenant",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "Découvrir notre offre",
        }}
      />
      <CardMarketing
        image={{
          src: "https://dummyimage.com/282x130/edf/00008F",
          alt: "Assurez votre habitation dès maintenant",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "Découvrir notre offre",
        }}
      />
      <CardMarketing
        image={{
          src: "https://dummyimage.com/282x130/edf/00008F",
          alt: "Assurez votre habitation dès maintenant",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "Découvrir notre offre",
        }}
      />
    </PatternMozaicGrid>
  </PatternWithAction>
);
