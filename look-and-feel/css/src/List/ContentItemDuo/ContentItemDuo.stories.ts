import type { Args, Meta, StoryObj } from "@storybook/html";
import "../../Button/Button.client.scss";
import "../../Card/Card.client.scss";
import "../List.scss";
import "./ContentItemDuo.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/List/ContentItemDuo",
};

export default meta;

const contentItemDuoRender = (args: Args) => {
  const container = document.createElement("div");

  const modifiers = structuredClone(args.classModifier);

  if (args.isVertical) {
    modifiers.push("vertical");
  }

  container.classList.add(
    "af-content-item-duo",
    ...modifiers
      .filter(Boolean)
      .map((modifier: string) => `af-content-item-duo--${modifier}`),
  );

  if (args.isShowingDoneIcon) {
    const doneIconContainer = document.createElement("div");
    doneIconContainer.className =
      "af-content-item-duo__icon af-content-item-duo__icon--done";
    doneIconContainer.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_21132_3825" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_21132_3825)">
                <path d="M9.44999 18.1893L3.51074 12.25L4.93924 10.8218L9.44999 15.3325L19.0357 5.74677L20.4642 7.17502L9.44999 18.1893Z"/>
            </g>
        </svg>`;
    container.appendChild(doneIconContainer);
  }

  if (args.isShowingCloseIcon) {
    const closeIconContainer = document.createElement("div");
    closeIconContainer.className =
      "af-content-item-duo__icon af-content-item-duo__icon--close";
    closeIconContainer.innerHTML = `
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.72494 15.1642L0.335693 13.7749L6.11069 7.99994L0.335693 2.22494L1.72494 0.835693L7.49994 6.61069L13.2749 0.835693L14.6642 2.22494L8.88919 7.99994L14.6642 13.7749L13.2749 15.1642L7.49994 9.38919L1.72494 15.1642Z" fill="#C91432"/>
        </svg>`;
    container.appendChild(closeIconContainer);
  }

  const label = document.createElement("p");
  label.className = "af-content-item-duo__label";
  label.textContent = args.label;
  container.appendChild(label);

  const value = document.createElement("p");
  value.className = "af-content-item-duo__value";
  value.textContent = args.value;
  container.appendChild(value);

  if (args.buttonText) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "af-content-item-duo__button";
    const button = document.createElement("button");
    button.className = "af-btn-client af-btn-client--ghost";
    button.textContent = args.buttonText;
    buttonContainer.appendChild(button);
    container.appendChild(buttonContainer);
  }

  return container;
};

const defaultArgs = {
  isVertical: false,
  label: "Libellé",
  value: "Réponse",
  isShowingDoneIcon: true,
  isShowingCloseIcon: false,
  buttonText: "En savoir plus",
  classModifier: [],
};

const verticalArgs = {
  isVertical: true,
  label:
    "Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",
  value: "Les incendies, explosions, implosions, fumée et foudre",
  isShowingDoneIcon: true,
  isShowingCloseIcon: false,
  buttonText: "En savoir plus",
  classModifier: [],
};

const contentItemDuoListRender = ({ classModifier, ...args }: Args) => {
  const list = document.createElement("section");

  list.className = `af-card ${["list", "extra-padding", ...classModifier]
    .filter(Boolean)
    .map((modifier: string) => ` af-card--${modifier}`)
    .join("")}`;

  list.tabIndex = 0;

  const ul = document.createElement("ul");

  ul.className = "af-list";

  args.items.forEach((childArgs: Args, index: number) => {
    const item = document.createElement("li");
    item.className = "af-list__item";

    const newChildArgs = structuredClone(childArgs);

    if (args.isItemsLarge) {
      newChildArgs.classModifier = ["large"];
    }

    item.appendChild(contentItemDuoRender(newChildArgs));

    ul.appendChild(item);

    if (index < args.items.length - 1) {
      const separator = document.createElement("hr");
      separator.className = "af-list__separator";
      ul.appendChild(separator);
    }
  });

  list.appendChild(ul);

  return list;
};

export const Default: StoryObj = {
  render: contentItemDuoRender,
  args: defaultArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const Vertical: StoryObj = {
  render: contentItemDuoRender,
  args: verticalArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const DefaultContentItemDuoList: StoryObj = {
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(defaultArgs),
    isItemsLarge: false,
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const verticalContentItemDuoList: StoryObj = {
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(verticalArgs),
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
