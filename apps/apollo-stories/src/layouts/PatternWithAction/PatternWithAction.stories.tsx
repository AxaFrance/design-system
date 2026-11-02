import {
  Button,
  Card,
  DebugGrid,
  PatternMozaicGrid,
  PatternWithAction,
} from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";

const content = (
  <PatternMozaicGrid
    key="content"
    data-cols-mobile={4}
    data-cols-desktop-small={4}
  >
    {Array.from({ length: 3 }, (_, index) => (
      <Card key={index}>Document {index + 1}</Card>
    ))}
  </PatternMozaicGrid>
);

const meta = {
  title: "Layouts/Pattern With Action",
  component: PatternWithAction,
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
    headingProps: { children: "Mes derniers documents" },
    children: [
      <PatternWithAction.Action key="action">
        <Button variant="secondary">Afficher mes documents</Button>
      </PatternWithAction.Action>,
      content,
    ],
  },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof PatternWithAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {};

export const WithoutAction: Story = { args: { children: content } };

export const CustomHeadingLevel: Story = {
  args: {
    headingProps: { children: "Pour aller plus loin", level: 3 },
  },
};
