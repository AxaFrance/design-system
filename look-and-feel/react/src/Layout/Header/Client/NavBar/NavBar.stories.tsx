import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Look-and-feel/Components/Header/NavBar",
  component: NavBar,
  argTypes: {
    setActiveLink: { action: "active link changed" },
    activeLink: { control: { type: "number", min: 0, max: 3 } },
  },
};
export default meta;

type StoryProps = React.ComponentProps<typeof NavBar>;
type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: ({ activeLink, setActiveLink }: StoryProps) => (
    <NavBar activeLink={activeLink} setActiveLink={setActiveLink}>
      <a
        key="MES CONTRATS link"
        className="af-navbar-item__link"
        href="/mes-contrats"
      >
        MES CONTRATS
      </a>
      <a
        key="MES AVANTAGES link"
        className="af-navbar-item__link"
        href="/mes-avantages"
      >
        MES AVANTAGES
      </a>
      <a
        key="MES DOCUMENTS link"
        className="af-navbar-item__link"
        href="/mes-documents"
      >
        MES DOCUMENTS
      </a>
    </NavBar>
  ),
  args: {
    activeLink: 0,
  },
};
