import type { Meta, StoryObj } from "@storybook/react";
import { Variants } from "../Button/Button.client";
import { Button } from "../client";
import { Header } from "./Header.client";
import { Icon } from "../Icons/Icons.client";
import "./Header.client.stories.css";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Client/Components/Header",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = Omit<React.ComponentProps<typeof Header>, "rightItem"> & {
  rightItem: JSX.Element;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Header",
  render: ({ rightItem }) => (
    <div style={{ minWidth: "70vw" }}>
      <Header rightItem={rightItem} />
    </div>
  ),
  argTypes: {
    rightItem: {
      control: { type: "input" },
    },
  },
};

export const HeaderWithRightItem: StoryObj<typeof Header> = {
  name: "Header with right item",
  render: ({ rightItem }) => (
    <div style={{ minWidth: "70vw" }}>
      <Header rightItem={rightItem} />
    </div>
  ),
  args: {
    rightItem: (
      <Button
        className="header-client-stories-button"
        variant={Variants.secondary}
        iconLeft={<Icon name="save" fill="#00008F" />}
      >
        <span>Enregistrer dans mon espace client</span>
        <span>Enregistrer</span>
      </Button>
    ),
  },
};
