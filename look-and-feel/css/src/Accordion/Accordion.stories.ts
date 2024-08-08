import type { Args, Meta, StoryObj } from "@storybook/html";
import "../Card/Card.client.scss";
import "../Tag/Tag.client.scss";
import "./Accordion.scss";

const meta: Meta = {
  title: "Components/Accordion",
};

export default meta;

const getTagDateContainer = (tag: string, date: string) => {
  const tagDateContainer = document.createElement("div");
  tagDateContainer.className = "af-accordion__tag-date-container";

  if (tag) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "af-accordion__tag-container";
    const tagElement = document.createElement("div");
    tagElement.className = "af-tag af-tag--warning";
    tagElement.innerHTML = `<span class="af-tag__label">${tag}</span>`;
    tagContainer.appendChild(tagElement);
    tagDateContainer.appendChild(tagContainer);
  }

  if (date) {
    const dateElement = document.createElement("p");
    dateElement.className = "af-accordion__date";
    dateElement.textContent = date;
    tagDateContainer.appendChild(dateElement);
  }

  return tagDateContainer;
};

const template = ({
  icon,
  title,
  subtitle,
  date,
  tag,
  value,
  content,
  isOpen,
  isTitleFirst,
}: Args) => {
  const isMobile = window.screen.width <= 667;
  const container = document.createElement("details");
  container.className = "af-accordion";
  container.open = isOpen;

  const summary = document.createElement("summary");
  summary.className = "af-accordion__summary";

  const titleContainer = document.createElement("div");
  titleContainer.className = "af-accordion__title-container";

  if (!isTitleFirst) {
    if (tag || date) {
      summary.appendChild(getTagDateContainer(tag, date));
    }
  } else {
    summary.className += " af-accordion__summary--title-first";
  }

  if (icon && isTitleFirst) {
    const iconContainer = document.createElement("div");
    iconContainer.className = "af-accordion__icon";
    iconContainer.innerHTML = icon;
    (isMobile ? summary : titleContainer).appendChild(iconContainer);
  }

  const titleElement = document.createElement("p");
  titleElement.className = "af-accordion__title";
  titleElement.textContent = title;
  titleContainer.appendChild(titleElement);

  if (subtitle) {
    const subtitleElement = document.createElement("p");
    subtitleElement.className = "af-accordion__subtitle";
    subtitleElement.textContent = subtitle;
    titleContainer.appendChild(subtitleElement);
  }

  summary.appendChild(titleContainer);

  if (isTitleFirst && (tag || date)) {
    summary.appendChild(getTagDateContainer(tag, date));
  }

  if (value) {
    const valueElement = document.createElement("p");
    valueElement.className = "af-accordion__value";
    valueElement.textContent = value;
    summary.appendChild(valueElement);
  }

  container.appendChild(summary);

  const separator = document.createElement("hr");
  separator.className = "af-accordion__separator";
  container.appendChild(separator);

  const accordionContent = document.createElement("div");
  accordionContent.className = "af-accordion__content";
  accordionContent.innerHTML = content;
  container.appendChild(accordionContent);

  return container;
};

const defaultArgs = {
  icon: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_12386_25920" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
        <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_12386_25920)">
        <path d="M19.875 21.5C17.9417 21.5 15.9708 21.0333 13.9625 20.1C11.9542 19.1667 10.0917 17.8417 8.375 16.125C6.65833 14.4083 5.33333 12.5458 4.4 10.5375C3.46667 8.52917 3 6.55833 3 4.625C3 4.30833 3.10833 4.04167 3.325 3.825C3.54167 3.60833 3.80833 3.5 4.125 3.5H7.625C7.85833 3.5 8.05833 3.58333 8.225 3.75C8.39167 3.91667 8.50833 4.125 8.575 4.375L9.25 7.525C9.28333 7.75833 9.27917 7.97083 9.2375 8.1625C9.19583 8.35417 9.10833 8.51667 8.975 8.65L6.475 11.175C6.90833 11.9083 7.36667 12.5917 7.85 13.225C8.33333 13.8583 8.86667 14.4583 9.45 15.025C10.0667 15.6583 10.7167 16.2375 11.4 16.7625C12.0833 17.2875 12.8 17.75 13.55 18.15L15.925 15.7C16.0917 15.5167 16.2833 15.3917 16.5 15.325C16.7167 15.2583 16.9333 15.2417 17.15 15.275L20.125 15.925C20.375 15.9917 20.5833 16.125 20.75 16.325C20.9167 16.525 21 16.75 21 17V20.375C21 20.6917 20.8917 20.9583 20.675 21.175C20.4583 21.3917 20.1917 21.5 19.875 21.5Z" fill="#333333"/>
      </g>
    </svg>`,
  title: "Titre onglet",
  subtitle: "Titre onglet",
  tag: "En attente",
  date: "01/01/2021",
  value: "+ 686,00 €",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
  isOpen: false,
  isTitleFirst: true,
};

export const Accordion: StoryObj = {
  render: template,
  args: defaultArgs,
  argTypes: {
    date: { control: "text" },
  },
};

export const AccordionInCard: StoryObj = {
  render: (args) => {
    const container = document.createElement("section");
    container.className = "af-card af-card--large af-card--accordion";

    container.appendChild(template(args));

    return container;
  },

  args: defaultArgs,
  argTypes: {
    date: { control: "text" },
  },
};
