import {
  Card,
  CardMarketing,
  DebugGrid,
  PatternMozaicGrid,
} from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import "../layout.css";

const meta = {
  title: "Layouts/Pattern Mozaic Grid",
  component: PatternMozaicGrid,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <>
        <DebugGrid isCheckedByDefault forceVisible />
        <main className="grid">
          <Story />
        </main>
      </>
    ),
  ],
  args: {
    "data-cols-mobile": 4,
    "data-cols-desktop-small": 3,
    children: Array.from({ length: 6 }, (_, index) => (
      <Card key={index}>Card {index + 1}</Card>
    )),
  },
  argTypes: {
    children: { control: false },
    cols: { control: { type: "range", min: 1, max: 12, step: 1 } },
    "data-cols-mobile": { control: { type: "range", min: 1, max: 4, step: 1 } },
    "data-cols-tablet": { control: { type: "range", min: 1, max: 8, step: 1 } },
    "data-cols-desktop-small": {
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    "data-cols-desktop-medium": {
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    "data-cols-desktop-large": {
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
  },
} satisfies Meta<typeof PatternMozaicGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Responsive: Story = {};

export const AllBreakpoints: Story = {
  args: {
    "data-cols-mobile": 4,
    "data-cols-tablet": 4,
    "data-cols-desktop-small": 6,
    "data-cols-desktop-medium": 4,
    "data-cols-desktop-large": 3,
  },
};

export const ContentZones: Story = {
  args: {
    ...AllBreakpoints.args,
    className: "layout-demo",
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
