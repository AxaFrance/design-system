import type { Meta, StoryObj } from "@storybook/html";
import "../../Button/Button.client.scss";
import "../../Card/Card.client.scss";
import "../../Tag/Tag.client.scss";
import "../List.scss";
import "./ContentTabList.client.scss";

const meta: Meta = {
  title: "Client/Components/List/ContentTabList",
};

export default meta;

type TContentTabList = {
  items: {
    title: string;
    subtitle?: string;
    tag?: string;
    date?: string;
    showDownloadButton?: boolean;
    showDisplayButton?: boolean;
    value?: string;
  }[];
};

const template = ({ items }: TContentTabList) => {
  const list = document.createElement("section");

  list.className = "af-card af-card--list af-card--content-tab-list";

  const ul = document.createElement("ul");

  ul.className = "af-list";

  items.forEach(
    (
      {
        title,
        subtitle,
        date,
        tag,
        showDownloadButton,
        showDisplayButton,
        value,
      },
      index: number,
    ) => {
      const item = document.createElement("li");
      item.className = "af-list__item";

      const leftContainer = document.createElement("div");
      leftContainer.className = "af-list-item__left-container";

      const rightContainer = document.createElement("div");
      rightContainer.className = "af-list-item__right-container";

      if (value) {
        const additionalDataContainer = document.createElement("div");
        additionalDataContainer.className =
          "af-list-item__additional-data-container";

        if (date) {
          const dateElement = document.createElement("span");
          dateElement.className = "af-list-item__date";
          dateElement.textContent = date;
          additionalDataContainer.appendChild(dateElement);
        }

        if (tag) {
          const tagElement = document.createElement("div");
          tagElement.className = "af-tag af-tag--warning";
          tagElement.innerHTML = `<span class="af-tag__label">${tag}</span>`;
          additionalDataContainer.appendChild(tagElement);
        }

        if (date || tag) {
          leftContainer.appendChild(additionalDataContainer);
        }
      }

      const labelElement = document.createElement("div");
      labelElement.className = "af-list-item__label";
      labelElement.innerHTML = `<span class="af-list-item-label__title">${title}</span>`;
      if (subtitle) {
        labelElement.innerHTML += `<span class="af-list-item-label__subtitle">${subtitle}</span>`;
      }
      leftContainer.appendChild(labelElement);

      if (!value) {
        const additionalDataContainer = document.createElement("div");
        additionalDataContainer.className =
          "af-list-item__additional-data-container";

        if (tag) {
          const tagElement = document.createElement("div");
          tagElement.className = "af-tag af-tag--warning";
          tagElement.innerHTML = `<span class="af-tag__label">${tag}</span>`;
          additionalDataContainer.appendChild(tagElement);
        }

        if (date) {
          const dateElement = document.createElement("span");
          dateElement.className = "af-list-item__date";
          dateElement.textContent = date;
          additionalDataContainer.appendChild(dateElement);
        }

        if (tag || date) {
          leftContainer.appendChild(additionalDataContainer);
        }
      }

      item.appendChild(leftContainer);

      if (showDownloadButton) {
        const downloadButtonContainer = document.createElement("div");
        downloadButtonContainer.className = "af-list-item__button-container";

        const downloadButton = document.createElement("button");
        downloadButton.className = "af-btn-client af-btn-client--ghost";
        downloadButton.type = "button";
        downloadButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
            <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>
          </svg>
          Télécharger
        `;
        downloadButtonContainer.appendChild(downloadButton);

        rightContainer.appendChild(downloadButtonContainer);
      }

      if (showDisplayButton) {
        const showButtonContainer = document.createElement("div");
        showButtonContainer.className = "af-list-item__button-container";

        const displayButton = document.createElement("button");
        displayButton.className = "af-btn-client af-btn-client--ghost";
        displayButton.type = "button";
        displayButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00008F" viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
          Afficher
        `;
        showButtonContainer.appendChild(displayButton);

        rightContainer.appendChild(showButtonContainer);
      }

      if (value) {
        const valueElement = document.createElement("span");
        valueElement.className = "af-list-item__value";
        valueElement.textContent = value;
        rightContainer.appendChild(valueElement);
      }

      item.appendChild(rightContainer);
      ul.appendChild(item);

      if (index < items.length - 1) {
        const separator = document.createElement("hr");
        separator.className = "af-list__separator";
        ul.appendChild(separator);
      }
    },
  );

  list.appendChild(ul);

  return list;
};

export const ContentTabListWithButtons: StoryObj<TContentTabList> = {
  render: template,
  args: {
    items: [
      {
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        tag: "En attente",
        date: "01/01/2024",
        showDownloadButton: true,
      },
      {
        title: "Remboursement soins",
        tag: "En attente",
        showDownloadButton: true,
        showDisplayButton: true,
      },
    ],
  },
};

export const ContentTabListWithValue: StoryObj<TContentTabList> = {
  render: template,
  args: {
    items: [
      {
        title: "Remboursement soins",
        subtitle: "Titre onglet",
        date: "01/01/2024",
        value: "+ 11,86 €",
      },
      {
        title: "Remboursement soins",
        tag: "En attente",
        value: "+ 11,86 €",
      },
    ],
  },
};
