import type { Args, Meta, StoryObj } from "@storybook/html";
import "../Card/Card.scss";
import "./AccordionCore.scss";

const meta: Meta = {
  title: "Components/AccordionCore",
};

export default meta;

const template = ({ title, content, isOpen }: Args) => {
  const container = document.createElement("details");
  container.className = "af-accordion";
  container.open = isOpen;

  const summary = document.createElement("summary");
  summary.className = "af-accordion__summary";

  const titleContainer = document.createElement("div");
  titleContainer.className = "af-accordion__title-container";

  const titleElement = document.createElement("p");
  titleElement.textContent = title;
  titleContainer.appendChild(titleElement);

  summary.appendChild(titleContainer);

  container.appendChild(summary);

  const accordionContent = document.createElement("div");
  accordionContent.className = "af-accordion__content";
  accordionContent.innerHTML = content;
  container.appendChild(accordionContent);

  return container;
};

const defaultArgs = {
  title: "Titre onglet",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
  isOpen: false,
};

export const AccordionCore: StoryObj = {
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
