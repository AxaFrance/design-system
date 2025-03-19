import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import { div, form, grid, p, subgrid } from "../utils";
import { renderDebugGrid } from "./renderDebugGrid";

import { render as renderButton } from "../ButtonRender";
import { render as renderCheckbox } from "../CheckBoxRender";
import { render as renderFooter } from "../FooterRender";
import { render as renderHeader } from "../HeaderRender";
import { render as renderRadio } from "../RadioRender";
import { render as renderText } from "../TextRender";
import { render as renderTitle } from "../TitleRender";

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const setAttributesFields = (value: string, label: string, type = "text") => ({
  value,
  type,
  name: label,
  id: label,
  disabled: false,
  required: true,
  label: `${capitalizeFirstLetter(label)} de la personne`,
  placeholder: `Votre ${label}`,
  description: `Saisissez un ${label}`,
  error: `Un ${label} est obligatoire`,
  class: "subgrid",
  helper: "Do you need help ?",
  buttonLabel: "En savoir plus",
});

const FIELDS = [
  setAttributesFields("Gomez", "nom"),
  setAttributesFields("Samuel", "prénom"),
  setAttributesFields("samuel.gomez@axa.fr", "email", "email"),
  setAttributesFields("0601020304", "téléphone"),
];

const renderFields = () => {
  const checkboxField = renderCheckbox({
    label: "Quelle ville ?",
    class: "subgrid",
    isRequired: true,
    error: "",
    checkboxList: [
      {
        name: "Paris",
        withIcon: true,
        labelGroup: {
          title: "Paris",
          subtitle: "Capitale de la France",
          description: "Nord",
        },
      },
      {
        name: "Bruxelles",
        withIcon: true,
        labelGroup: { title: "Bruxelles", subtitle: "Capitale de la Belgique" },
      },
      {
        name: "Lille",
        withIcon: true,
        labelGroup: { title: "Lille" },
      },
    ],
  });
  const radioField = renderRadio({
    label: "Quelle ville ?",
    class: "subgrid",
    isRequired: true,
    error: "",
    radioList: [
      {
        name: "cities",
        withIcon: true,
        labelGroup: {
          title: "Paris",
          subtitle: "Capitale de la France",
          description: "Nord",
        },
      },
      {
        name: "cities",
        withIcon: true,
        labelGroup: { title: "Bruxelles", subtitle: "Capitale de la Belgique" },
      },
      {
        name: "cities",
        withIcon: true,
        labelGroup: { title: "Lille" },
      },
    ],
  });

  const fields = FIELDS.map((field) => renderText(field));

  return subgrid({
    children: [checkboxField, radioField, ...fields],
    attributes: { class: "form__fields" },
  });
};

const renderActions = () => {
  const prevButton = renderButton({
    label: "Précédent",
    variant: "secondary",
  });

  const nextButton = renderButton({
    label: "Valider",
    variant: "primary",
  });

  return subgrid({
    children: [prevButton, nextButton],
    attributes: { class: "form__actions" },
  });
};

const renderMainTitle = () =>
  renderTitle({
    children: "Mon formulaire",
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
  const mentions = p(["Les mentions avec * sont obligatoires"]);
  const headerForm = subgrid({
    children: [mainTitle, mentions],
    node: "header",
    attributes: {
      class: "form__header",
    },
  });

  const fields = renderFields();

  const actions = renderActions();

  const formElement = form([headerForm, fields, actions], {
    class: "form",
  });

  const main = grid({
    children: [formElement],
    attributes: {
      class: "example-form",
    },
  });

  const demo = div([...renderDebugGrid(), header, main, footer]);

  return demo;
};
