import {
  Card,
  CardMarketing,
  Heading,
  PatternCardMarketing,
} from "@axa-fr/canopee-react/prospect";

export const AllerPlusLoin = () => (
  <Card as="section" variant="vertical unstyled" className="subgrid">
    <Heading level={2}>Pour aller plus loin</Heading>
    <PatternCardMarketing>
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
        variant="horizontal"
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
        variant="horizontal"
      />
    </PatternCardMarketing>
  </Card>
);
