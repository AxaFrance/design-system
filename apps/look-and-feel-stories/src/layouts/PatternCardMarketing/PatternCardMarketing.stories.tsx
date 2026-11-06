import {
  Card,
  CardMarketing,
  PatternCardMarketing,
} from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import "../layout.css";

const cards = Array.from({ length: 4 }, (_, index) => (
  <CardMarketing
    key={index}
    image={{ src: "https://dummyimage.com/282x130/edf/00008F", alt: "" }}
    title={`Découvrez notre offre ${index + 1}`}
    text="Des garanties adaptées à votre quotidien."
    linkProps={{ href: "https://www.axa.fr/", children: "Découvrir l'offre" }}
    variant={index === 0 ? "vertical" : "horizontal"}
  />
));

const meta = {
  title: "Layouts/Pattern Card Marketing",
  component: PatternCardMarketing,
  args: { children: cards.slice(0, 3) },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof PatternCardMarketing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeCards: Story = {};

export const TwoCards: Story = { args: { children: cards.slice(0, 2) } };

export const FourCards: Story = { args: { children: cards } };

export const ContentZones: Story = {
  parameters: { layout: "fullscreen" },
  args: {
    className: "layout-demo",
    children: Array.from({ length: 3 }, (_, index) => (
      <Card key={index} className="af-card--layout">
        Content {index + 1}
      </Card>
    )),
  },
};
