import type { Args, Meta, StoryObj } from "@storybook/html";
import "../../Card/Card.client.scss";
import "../List.scss";
import "./ContentItemMono.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/List/ContentItemMono",
};

export default meta;

const template = ({ classModifier, ...args }: Args) => {
  const container = document.createElement("div");

  const modifiers = [args.size, ...classModifier.split(" ")];

  if (args.isDisabled) {
    modifiers.push("disabled");
  }

  container.classList.add(
    "af-content-item-mono",
    ...modifiers
      .filter(Boolean)
      .map((modifier) => `af-content-item-mono--${modifier}`),
  );

  if (args.hasStick) {
    const stick = document.createElement("div");
    stick.className = "af-content-item-mono__stick";
    container.appendChild(stick);
  }

  if (args.leftElement) {
    const leftElement = document.createElement("div");
    leftElement.className = "af-content-item-mono__left-container";

    if (args.isLeftElementCentered) {
      leftElement.className += " af-content-item-mono__left-container--center";
    }

    leftElement.innerHTML = args.leftElement;
    container.appendChild(leftElement);
  }

  const textContainer = document.createElement("div");
  textContainer.className = "af-content-item-mono__text-container";

  const mainText = document.createElement("p");
  mainText.className = "af-content-item-mono__main-text";
  mainText.innerHTML = args.children;
  textContainer.appendChild(mainText);

  if (args.secondaryText) {
    const secondaryText = document.createElement("p");
    secondaryText.className = "af-content-item-mono__secondary-text";
    secondaryText.innerHTML = args.secondaryText;
    textContainer.appendChild(secondaryText);
  }

  if (args.tertiaryText && args.size !== "xl") {
    const tertiaryText = document.createElement("p");
    tertiaryText.className = "af-content-item-mono__tertiary-text";
    tertiaryText.innerHTML = args.tertiaryText;
    textContainer.appendChild(tertiaryText);
  }

  container.appendChild(textContainer);

  return container;
};

const defaultArgs: Args = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "Texte tertiaire",
  size: "m",
  isDisabled: false,
  leftElement: "",
  isLeftElementCentered: false,
  hasStick: false,
  classModifier: "",
};

const contentItemMonoWithIconArgs: Args = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "Texte tertiaire",
  size: "m",
  isDisabled: false,
  leftElement: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M686-450H190q-13 0-21.5-8.5T160-480q0-13 8.5-21.5T190-510h496L459-737q-9-9-9-21t9-21q9-9 21-9t21 9l278 278q5 5 7 10t2 11q0 6-2 11t-7 10L501-181q-9 9-21 9t-21-9q-9-9-9-21t9-21l227-227Z"/>
        </svg>`,
  isLeftElementCentered: true,
  hasStick: false,
  classModifier: "",
};

const contentItemMonoWithStickArgs: Args = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "",
  size: "m",
  isDisabled: false,
  leftElement: "",
  isLeftElementCentered: false,
  hasStick: true,
  classModifier: "",
};

export const Default: StoryObj = {
  render: template,
  args: defaultArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoWithIcon: StoryObj = {
  render: template,
  args: contentItemMonoWithIconArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoWithStick: StoryObj = {
  render: template,
  args: contentItemMonoWithStickArgs,
  argTypes: {
    size: {
      options: ["xl", "m"],
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoList: StoryObj = {
  render: ({ classModifier, ...args }: Args) => {
    const list = document.createElement("section");

    list.className = `af-card ${["list", ...classModifier]
      .filter(Boolean)
      .map((modifier: string) => ` af-card--${modifier}`)
      .join("")}`;

    list.tabIndex = 0;

    const ul = document.createElement("ul");

    ul.className = "af-list";

    args.items.forEach((childArgs: Args, index: number) => {
      const item = document.createElement("li");
      item.className = "af-list__item";

      item.appendChild(template(childArgs));

      ul.appendChild(item);

      if (index < args.items.length - 1) {
        const separator = document.createElement("hr");
        separator.className = "af-list__separator";
        ul.appendChild(separator);
      }
    });

    list.appendChild(ul);

    return list;
  },
  args: {
    items: [
      defaultArgs,
      contentItemMonoWithIconArgs,
      contentItemMonoWithStickArgs,
    ],
    classModifier: ["first-separator-full-width"],
  },
  argTypes: {
    classModifier: {
      options: ["large", "first-separator-full-width"],
      control: { type: "multi-select" },
      defaultValue: ["first-separator-full-width"],
    },
  },
};
