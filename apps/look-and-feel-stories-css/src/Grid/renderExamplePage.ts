import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import { div, grid, subgrid } from "../utils";
import { renderDebugGrid } from "./renderDebugGrid";

import { render as renderClickList } from "../ClickListRender";
import { contentItemDuoListRender } from "../ContentItemDuoRender";
import { render as renderFooter } from "../FooterRender";
import { render as renderHeader } from "../HeaderRender";
import { render as renderTitle } from "../TitleRender";

const renderList = () => {
  const defaultArgs = {
    isVertical: false,
    label:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, suscipit sint! Reiciendis, eos? Eveniet, aut qui. Autem reprehenderit,",
    value: "Réponse",
    isShowingDoneIcon: true,
    isShowingCloseIcon: false,
    buttonText: "En savoir plus",
    classModifier: ["large"],
  };

  return contentItemDuoListRender({
    items: Array(6).fill(defaultArgs),
    isItemsLarge: false,
    classModifier: [],
  });
};

const renderContact = () => {
  const args = {
    items: [
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
        classModifier: "small",
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
        classModifier: "large",
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: true,
      },
    ],
    cardClassModifier: "",
  };

  return renderClickList(args);
};

const renderLayout = () => {
  const list = renderList();
  const list2 = renderList();
  const titleList = renderTitle({
    children: "My list title",
    classModifier: "l",
  });

  const lists = subgrid({
    attributes: { class: "af-list-part" },
    children: [list, list2],
  });

  const leftPart = subgrid({
    attributes: { class: "af-left-part" },
    children: [titleList, lists],
  });

  const titleContacts = renderTitle({
    children: "Contacts",
    classModifier: "l",
  });

  const contact1 = renderContact();
  const contact2 = renderContact();
  const contacts = subgrid({
    attributes: { class: "af-contacts-part" },
    children: [contact1, contact2],
  });

  const rightPart = subgrid({
    attributes: { class: "af-right-part" },
    children: [titleContacts, contacts],
  });

  return div([leftPart, rightPart], { class: "container-part" });
};

const renderMainTitle = () =>
  renderTitle({
    children: "Titre de la page",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
              <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
          </svg>`,
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    classModifier: "",
    size: "xl",
  });

export const render = () => {
  const header = renderHeader({
    logo,
    alt: "Logo AXA",
    links: ["MES CONTRATS", "MES AVANTAGES", "MES DOCUMENTS"],
  });

  const footer = renderFooter();

  const mainTitle = renderMainTitle();

  const containerPart = renderLayout();

  const main = grid({
    children: [mainTitle, containerPart],
    attributes: {
      class: "example-page",
    },
  });

  const demo = div([...renderDebugGrid(), header, main, footer]);

  return demo;
};
