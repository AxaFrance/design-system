import {
  Card,
  CardMarketing,
  PatternMozaicFree,
} from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import "../layout.css";

const meta = {
  title: "Layouts/Pattern Mozaic Free",
  component: PatternMozaicFree,
  parameters: { layout: "fullscreen" },

  args: {
    cols: 2,
    children: Array.from({ length: 6 }, (_, index) => (
      <Card key={index}>Card {index + 1}</Card>
    )),
  },
  argTypes: {
    children: { control: false },
    cols: { control: { type: "range", min: 1, max: 12, step: 1 } },
  },
} satisfies Meta<typeof PatternMozaicFree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumns: Story = {};

export const ThreeColumns: Story = { args: { cols: 3 } };

export const FiveColumns: Story = { args: { cols: 5 } };

export const ContentZones: Story = {
  args: {
    className: "layout-demo",
    cols: 3,
    children: Array.from({ length: 6 }, (_, index) => (
      <Card key={index} className="af-card--layout">
        Content {index + 1}
      </Card>
    )),
  },
};

export const WithCardMarketing: Story = {
  args: {
    children: Array.from({ length: 4 }, (_, index) => (
      <CardMarketing
        key={index}
        image={{ src: "./hero-prospect.jpg", alt: "" }}
        title="Découvrez nos offres"
        text="Des garanties adaptées à votre quotidien."
        linkProps={{
          href: "https://www.axa.fr/",
          children: "Découvrir l'offre",
        }}
      />
    )),
  },
};
