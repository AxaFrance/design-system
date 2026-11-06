import {
  Button,
  CardMarketing,
  PatternMozaicGrid,
  PatternWithAction,
} from "@axa-fr/canopee-react/prospect";

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
          alt: "",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "Découvrir l'offre habitation",
        }}
      />
      <CardMarketing
        image={{
          src: "https://dummyimage.com/282x130/edf/00008F",
          alt: "",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "Obtenir un tarif habitation",
        }}
      />
      <CardMarketing
        image={{
          src: "https://dummyimage.com/282x130/edf/00008F",
          alt: "",
        }}
        title="Assurez votre habitation dès maintenant"
        text="Découvrez notre offre et obtenez un tarif."
        linkProps={{
          href: "/offre",
          children: "En savoir plus sur l'offre habitation",
        }}
      />
    </PatternMozaicGrid>
  </PatternWithAction>
);
