import {
  Action,
  Badge,
  HeaderTitle,
  Svg,
} from "@axa-fr/canopee-react/distributeur";
import chevronLeftIcon from "@material-symbols/svg-400/outlined/chevron_left.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import mailIcon from "@material-symbols/svg-400/outlined/mail.svg";
import saveIcon from "@material-symbols/svg-400/outlined/save.svg";
import { ComponentProps, useState } from "react";
import { fn } from "storybook/test";
import preview from "../../../.storybook/preview";

const MODIFIERS = ["sticky", "fixed"];

const meta = preview.meta({
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
});

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

export const DefaultTitle = meta.story();

export const ComplexTitle = meta.story({
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
});

export const ComplexTitleWithContentAndChildren = meta.story({
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
});

export const HeaderTitleWithAnchorNavBar = meta.story({
  render: ({ anchorNavBarItems, ...args }) => {
    const [activeItem, setActiveItem] = useState("Accueil");

    return (
      <HeaderTitle
        {...args}
        anchorNavBarItems={anchorNavBarItems?.map((item) => ({
          ...item,
          isActive: item.name === activeItem,
          onClick: () => setActiveItem(item.name),
        }))}
      />
    );
  },
  args: {
    anchorNavBarItems: [
      { name: "Accueil", link: "#accueil", isActive: true },
      { name: "À Propos", link: "#apropos" },
      { name: "Services", link: "/services", externalLink: true },
      { name: "Contact", link: "#contact" },
      {
        name: "Exemple de lien personnalisé",
        render: ({ className }: { className: string }) => (
          <a href="#exemple" className={className}>
            Exemple de lien personnalisé
          </a>
        ),
      },
    ],
  },
});
