import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";
import { Title } from "./Title";
import { Action } from "../../Action/Action";
import "@axa-fr/design-system-css/dist/Header/Title/Title.scss";

const meta: Meta<typeof Title> = {
  component: Title,
  title: "Components/Header/Title",
  args: {
    title: "Toolkit Axa",
    subtitle: "Info complémentaire",
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
        defaultValue: { summary: true },
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
      action: "toggled",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
  },
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

type TitleProps = ComponentProps<typeof Title>;

export const DefaultTitle: StoryObj<TitleProps> = {
  name: "Default Title",
  render: (args) => <Title {...args} />,
  args: {
    title: "Toolkit Axa",
    subtitle: "Info complémentaire",
    isSticky: true,
  },
  argTypes: {
    toggleMenu: { action: "onToggle" },
  },
};

export const ComplexTitle: StoryObj<TitleProps> = {
  name: "Complex Title",
  render: ({ children, ...args }) => <Title {...args}>{children}</Title>,
  args: {
    children: (
      <div className="af-title-bar__actions">
        <a className="af-title-bar__link" href="#lien" title="lien titlebar">
          lien titlebar
        </a>
        {actions.map(
          ({ icon, href, title, id }: ComponentProps<typeof Action>) => (
            <Action
              key={id}
              icon={icon}
              href={href}
              title={title}
              onClick={() => action("click action")}
            />
          ),
        )}
      </div>
    ),
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
  },
};
