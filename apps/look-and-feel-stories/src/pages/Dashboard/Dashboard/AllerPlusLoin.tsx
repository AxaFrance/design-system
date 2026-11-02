import {
  Card,
  CardMarketing,
  Heading,
  PatternCardMarketing,
} from "@axa-fr/canopee-react/client";

export const AllerPlusLoin = () => (
  <Card as="section" variant="vertical unstyled" className="subgrid">
    <Heading level={2}>Pour aller plus loin</Heading>
    <PatternCardMarketing>
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
        variant="horizontal"
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
        variant="horizontal"
      />
    </PatternCardMarketing>
  </Card>
);
