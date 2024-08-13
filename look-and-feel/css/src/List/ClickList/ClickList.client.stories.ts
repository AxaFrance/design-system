import type { Meta, StoryObj } from "@storybook/html";
import "../../Card/Card.client.scss";
import "../List.scss";
import "./ClickList.client.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/List/ClickList",
};

export default meta;

type TClickList = {
  items: { icon?: string; label: string; disabled: boolean }[];
  cardClassModifier?: string;
};

const template = ({ items, cardClassModifier }: TClickList) => {
  const list = document.createElement("section");

  list.className = "af-card af-card--list af-card--click-list";
  if (cardClassModifier) {
    list.className += ` af-card--${cardClassModifier}`;
  }

  const ul = document.createElement("ul");

  ul.className = "af-list";

  items.forEach((child, index: number) => {
    const item = document.createElement("li");
    item.className = "af-list__item";

    const itemButton = document.createElement("button");
    itemButton.className = "af-list-item__button";
    itemButton.type = "button";
    itemButton.disabled = child.disabled;

    const contentContainer = document.createElement("div");
    contentContainer.className = "af-list-item__content";

    if (child.icon) {
      const itemIcon = document.createElement("div");
      itemIcon.className = "af-list-item-content__icon";
      itemIcon.innerHTML = child.icon;
      contentContainer.appendChild(itemIcon);
    }

    const itemLabel = document.createElement("div");
    itemLabel.className = "af-list-item-content__label";
    itemLabel.innerHTML = child.label;
    contentContainer.appendChild(itemLabel);
    itemButton.appendChild(contentContainer);

    const itemAction = document.createElement("div");
    itemAction.className = "af-list-item__action";
    itemAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>`;
    itemButton.appendChild(itemAction);

    item.appendChild(itemButton);
    ul.appendChild(item);

    if (index < items.length - 1) {
      const separator = document.createElement("hr");
      separator.className = "af-list__separator";
      ul.appendChild(separator);
    }
  });

  list.appendChild(ul);

  return list;
};

export const ClickListWithIcon: StoryObj<TClickList> = {
  render: template,
  args: {
    items: [
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Déclarer un sinistre",
        disabled: false,
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"/>
          </svg>`,
        label: "Suivre mes sinistres",
        disabled: true,
      },
    ],
    cardClassModifier: "",
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickListWithoutIcon: StoryObj<TClickList> = {
  render: template,
  args: {
    items: [
      {
        label: `
          <h3 class="af-list-item-content-label__title">Fiche Orias précontractuelle</h3>
          <p class="af-list-item-content-label__subtitle">30 novembre 2021</p>
          <p class="af-list-item-content-label__secondary">Signé électroniquement</p>`,
        disabled: false,
      },
      {
        label: `
          <h3 class="af-list-item-content-label__title">Fiche Orias précontractuelle</h3>
          <p class="af-list-item-content-label__subtitle">30 novembre 2021</p>
          <p class="af-list-item-content-label__secondary">Signé électroniquement</p>`,
        disabled: true,
      },
    ],
    cardClassModifier: "",
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};
