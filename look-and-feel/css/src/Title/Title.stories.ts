import type { Args, Meta, StoryObj } from "@storybook/html";
import "../IconBg/IconBg.scss";
import "./Title.scss";

const meta: Meta = {
  title: "Components/Title",
};

export default meta;

const template = (args: Args) => {
  const headerContainer = document.createElement("header");
  headerContainer.className = `af-title${args.classModifier
    .split(" ")
    .filter(Boolean)
    .map((classModifier: string) => ` af-title--${classModifier}`)
    .join("")}`;
  headerContainer.className += ` af-title--${args.size}`;

  if (args.icon && args.size === "xl") {
    const icon = document.createElement("div");
    icon.className = "af-icon-bg af-title__icon";
    icon.innerHTML = args.icon;
    headerContainer.appendChild(icon);
  }

  const title = document.createElement("p");
  title.className = "af-title__title";
  title.textContent = args.children;

  headerContainer.appendChild(title);

  if (args.firstSubtitle) {
    const subtitle = document.createElement("span");
    subtitle.className = "af-title__subtitle";
    subtitle.textContent = args.firstSubtitle;
    headerContainer.appendChild(subtitle);
  }

  if (args.secondSubtitle && args.size === "xl") {
    const subtitle = document.createElement("span");
    subtitle.className = "af-title__subtitle";
    subtitle.textContent = args.secondSubtitle;
    headerContainer.appendChild(subtitle);
  }

  return headerContainer;
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
