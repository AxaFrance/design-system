import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Action } from "../../../../Action/Action";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Agent/TitleHeader/TitleHeader.scss";
import { TitleHeader } from "./TitleHeader";

const MODIFIERS = ["sticky", "fixed"];

const meta: Meta<typeof TitleHeader> = {
  args: {
    className: "af-title-bar",
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
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
  title: "Slash/Components/Header/TitleHeader",
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

export const DefaultTitle: StoryObj<typeof TitleHeader> = {
  name: "Default Title",
};

export const ComplexTitle: StoryObj<typeof TitleHeader> = {
  name: "Complex Title",
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
