import type { Meta, StoryObj } from "@storybook/react";
import save from "@material-design-icons/svg/outlined/save.svg";
import { Variants } from "../../Button/Button.client";
import { Button, Svg } from "../../client";
import { HeaderClient } from "./Header.client";
import "./Header.client.stories.css";

const meta: Meta<typeof HeaderClient> = {
  component: HeaderClient,
  title: "Client/Components/Header",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof HeaderClient>,
  "rightItem"
> & {
  rightItem: JSX.Element;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Header",
  render: ({ rightItem }) => (
    <div style={{ minWidth: "70vw" }}>
      <HeaderClient rightItem={rightItem} />
    </div>
  ),
  argTypes: {
    rightItem: {
      control: { type: "input" },
    },
  },
};

export const HeaderWithRightItem: StoryObj<typeof HeaderClient> = {
  name: "Header with right item",
  render: ({ rightItem }) => (
    <div style={{ minWidth: "70vw" }}>
      <HeaderClient rightItem={rightItem} />
    </div>
  ),
  args: {
    rightItem: (
      <Button
        className="header-client-stories-button"
        variant={Variants.secondary}
        iconLeft={<Svg src={save} fill="#00008F" />}
      >
        <span>Enregistrer dans mon espace client</span>
        <span>Enregistrer</span>
      </Button>
    ),
  },
};
