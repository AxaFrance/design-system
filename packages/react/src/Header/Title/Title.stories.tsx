import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";
import { Title } from "./Title";
import { Action } from "../../Action/Action";
import "@axa-fr/design-system-css/dist/Header/Title/Title.scss";

const meta: Meta<typeof Title> = {
  args: {
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
  },
  argTypes: {
    classModifier: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    className: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    isSticky: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
    subtitle: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    title: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    toggleMenu: {
      action: "onToggle",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
  },
  component: Title,
  title: "Agent/Components/Header/Title",
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

export const DefaultTitle: StoryObj<typeof Title> = {
  name: "Default Title",
  args: {
    isSticky: true,
    toggleMenu: () => action("toggled"),
  },
};

export const ComplexTitle: StoryObj<typeof Title> = {
  name: "Complex Title",
  args: {
    children: (
      <div className="af-title-bar__actions">
        <a className="af-title-bar__link" href="#lien" title="lien titlebar">
          lien titlebar
        </a>
        {actions.map(({ icon, id, title }: ComponentProps<typeof Action>) => (
          <Action
            key={id}
            icon={icon}
            title={title}
            onClick={() => action("clicked")}
          />
        ))}
      </div>
    ),
    isSticky: true,
    toggleMenu: () => action("toggled"),
  },
};
