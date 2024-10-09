import "@axa-fr/design-system-slash-css/dist/Layout/Header/TitleHeader/TitleHeader.scss";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import { Action } from "../../../Action/Action";
import { TitleHeader } from "./TitleHeader";

const MODIFIERS = ["sticky", "fixed"];

const meta: Meta<typeof TitleHeader> = {
  args: {
    className: "af-title-bar",
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
    toggleMenu: fn(),
  },
  argTypes: {
    toggleMenu: { action: "onToggle" },
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "sticky",
    },
  },
  component: TitleHeader,
  title: "Components/Header/TitleHeader",
};

export default meta;

const actions = [
  {
    id: "001",
    icon: "floppy-disk",
    title: "Enregistrer",
  },
  {
    id: "002",
    icon: "print",
    title: "Imprimer",
  },
];

export const DefaultTitle: StoryObj<typeof TitleHeader> = {};

export const ComplexTitle: StoryObj<typeof TitleHeader> = {
  args: {
    children: (
      <div className="af-title-bar__actions">
        <a className="af-title-bar__link" href="#lien" title="lien titlebar">
          lien titlebar
        </a>
        {actions.map(({ icon, id, title }: ComponentProps<typeof Action>) => (
          <Action key={id} icon={icon} title={title} onClick={() => {}} />
        ))}
      </div>
    ),
  },
};
