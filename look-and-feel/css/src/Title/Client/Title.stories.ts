import type { Args, Meta, StoryObj } from "@storybook/html";
import "../../IconBg/IconBg.client.scss";
import "./Title.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Title",
};

export default meta;

const template = (args: Args) => {
  const container = document.createElement("div");
  container.className = `af-title${args.classModifier
    .split(" ")
    .filter(Boolean)
    .map((classModifier: string) => ` af-title--${classModifier}`)
    .join("")}`;
  container.className += ` af-title--${args.size}`;

  const textContainer = args.icon ? document.createElement("div") : container;
  if (args.icon && args.size === "xl") {
    textContainer.className = "af-title__text-container";

    const icon = document.createElement("div");
    icon.className = "af-icon-bg af-title__icon";
    icon.innerHTML = args.icon;
    container.appendChild(icon);
  }

  const title = document.createElement("h1");
  title.className = "af-title__title";
  title.textContent = args.children;

  textContainer.appendChild(title);

  if (args.firstSubtitle) {
    const subtitle = document.createElement("span");
    subtitle.className = "af-title__subtitle";
    subtitle.textContent = args.firstSubtitle;
    textContainer.appendChild(subtitle);
  }

  if (args.secondSubtitle && args.size === "xl") {
    const subtitle = document.createElement("span");
    subtitle.className = "af-title__subtitle";
    subtitle.textContent = args.secondSubtitle;
    textContainer.appendChild(subtitle);
  }

  if (args.icon) {
    container.appendChild(textContainer);
  }

  return container;
};

export const TitleWithIcon: StoryObj = {
  render: template,
  args: {
    children: "Titre de la page",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960">
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm127-159h215q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Zm0-171h346q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H307q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5Z"/>
        </svg>`,
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    classModifier: "",
    size: "xl",
  },
  argTypes: {
    size: {
      options: ["xl", "l"],
      control: { type: "select" },
      defaultValue: "xl",
    },
  },
};

export const TitleWithoutIcon: StoryObj = {
  render: template,
  args: {
    children: "Titre de la page",
    icon: "",
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    classModifier: "",
    size: "xl",
  },
  argTypes: {
    size: {
      options: ["xl", "l"],
      control: { type: "select" },
      defaultValue: "xl",
    },
  },
};
