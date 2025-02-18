import type { Args } from "@storybook/html";

export const render = (args: Args) => {
  const headerContainer = document.createElement("header");
  headerContainer.className = `af-title${
    args.classModifier
      ?.split(" ")
      ?.filter(Boolean)
      ?.map((classModifier: string) => ` af-title--${classModifier}`)
      ?.join("") ?? ""
  }`;
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
