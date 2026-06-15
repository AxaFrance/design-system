import {
  Button,
  Tag,
  Timeline,
  type TimelineProps,
} from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.type<{ args: TimelineProps }>().meta({
  title: "Components/Timeline",
  component: Timeline,
});

export default meta;

export const Default = meta.story({
  args: {
    items: [
      {
        header: (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>10/01/2024</span>
            <span>Informations générales</span>
          </div>
        ),
        details: "Informations générales",
        date: new Date("2024-11-14"),
      },
      {
        header: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%",
            }}
          >
            <span>10/01/2025</span>
            <Tag variant="success">Informations complementaires</Tag>
            <Button type="button" variant="ghost" small>
              Voir
            </Button>
          </div>
        ),
        details: (
          <ul>
            <li>Détail A</li>
            <li>Détail B</li>
          </ul>
        ),
        date: new Date("2025-03-01"),
      },
      {
        header: (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>10/01/2035</span>
            <span>Données de pilotage</span>
          </div>
        ),
        details: "Détails d'une étape future",
        date: new Date("2035-12-17"),
      },
    ],
  },
});

export const SingleItem = meta.story({
  args: {
    items: [
      {
        header: "Étape unique",
        details: "Détails de l'étape unique",
        date: new Date("2024-11-14"),
      },
    ],
  },
});

export const WithoutDetails = meta.story({
  args: {
    variant: "withoutDetails",
    items: [
      {
        header: (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>10/01/2024</span>
            <span>Informations générales</span>
          </div>
        ),
        details: "Informations générales",
        date: new Date("2024-11-14"),
      },
      {
        header: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              width: "100%",
            }}
          >
            <span>10/01/2025</span>
            <Tag variant="success">Informations complémentaires</Tag>
            <Button type="button" variant="ghost" small>
              Voir
            </Button>
          </div>
        ),
        details: (
          <ul>
            <li>Détail A</li>
            <li>Détail B</li>
          </ul>
        ),
        date: new Date("2025-03-01"),
      },
    ],
  },
});
