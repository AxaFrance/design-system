import {
  Action,
  Badge,
  HeaderTitle,
  Svg,
} from "@axa-fr/design-system-slash-react";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import mailIcon from "@material-symbols/svg-400/outlined/mail.svg";
import saveIcon from "@material-symbols/svg-400/outlined/save.svg";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import chevronLeftIcon from "@material-symbols/svg-400/outlined/chevron_left.svg";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ComponentProps } from "react";

const MODIFIERS = ["sticky", "fixed"];

const meta: Meta<typeof HeaderTitle> = {
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
  component: HeaderTitle,
  title: "Components/Header/HeaderTitle",
};

export default meta;

const actions = [
  {
    id: "001",
    icon: deleteIcon,
    title: "Supprimer",
  },
  {
    id: "002",
    icon: mailIcon,
    title: "Envoyer",
  },
  {
    id: "003",
    icon: saveIcon,
    title: "Enregistrer",
  },
];

const leftActions = [
  {
    id: "001",
    icon: homeIcon,
    title: "Accueil",
  },
  {
    id: "002",
    icon: chevronLeftIcon,
    title: "Retour",
  },
];

export const DefaultTitle: StoryObj<typeof HeaderTitle> = {};

export const ComplexTitle: StoryObj<typeof HeaderTitle> = {
  args: {
    contentRight: (
      <div className="af-title-bar__actions">
        {actions.map(({ icon, id, title }: ComponentProps<typeof Action>) => (
          <a
            key={id}
            href="/#"
            role="button"
            title={title}
            className="btn af-btn--circle"
          >
            <Svg src={icon} />
          </a>
        ))}
      </div>
    ),
  },
};

export const ComplexTitleWithContentAndChildren: StoryObj<typeof HeaderTitle> =
  {
    args: {
      contentLeft: (
        <div className="af-title-bar__actions">
          {leftActions.map(
            ({ icon, id, title }: ComponentProps<typeof Action>) => (
              <a
                key={id}
                href="/#"
                role="button"
                title={title}
                className="btn  af-btn--circle"
              >
                <Svg src={icon} />
              </a>
            ),
          )}
        </div>
      ),
      children: <Badge classModifier="success"> Statut OK </Badge>,
      contentRight: (
        <div className="af-title-bar__actions">
          {actions.map(({ icon, id, title }: ComponentProps<typeof Action>) => (
            <a
              key={id}
              href="/#"
              role="button"
              title={title}
              className="btn af-btn--circle"
            >
              <Svg src={icon} />
            </a>
          ))}
        </div>
      ),
    },
  };
