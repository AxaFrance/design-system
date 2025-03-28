export type TCcontact = {
  items: {
    icon?: string;
    label: string;
    isDisabled: boolean;
    href?: string;
    target?: string;
    classModifier?: string;
  }[];
  cardClassModifier?: string;
};

export const render = ({ items, cardClassModifier }: TCcontact) => {
  const list = document.createElement("section");

  list.className = "af-card af-card--list af-card--click-list";
  if (cardClassModifier) {
    list.className += ` af-card--${cardClassModifier}`;
  }

  const ul = document.createElement("ul");

  ul.className = "af-list";

  items.forEach((child) => {
    const modifiers = child.classModifier ? [child.classModifier] : [];
    const item = document.createElement("li");
    item.className = "af-list__item";

    let clickItem: HTMLButtonElement | HTMLAnchorElement;

    if (child.href) {
      clickItem = document.createElement("a");
      clickItem.href = child.href;
      if (child.target) {
        clickItem.target = child.target;
      }
    } else {
      clickItem = document.createElement("button");
      clickItem.type = "button";
      clickItem.disabled = child.isDisabled;
    }

    if (child.isDisabled) {
      modifiers.push("disabled");
    }

    clickItem.classList.add(
      "af-click-item",
      ...modifiers
        .filter(Boolean)
        .map((modifier: string) => `af-click-item--${modifier}`),
    );

    const contentContainer = document.createElement("div");
    contentContainer.className = "af-click-item__content";

    if (child.icon) {
      const itemIcon = document.createElement("div");
      itemIcon.className = "af-click-item__icon";
      itemIcon.innerHTML = child.icon;
      contentContainer.appendChild(itemIcon);
    }

    const itemLabel = document.createElement("div");
    itemLabel.className = "af-click-item__label";
    itemLabel.innerHTML = child.label;
    contentContainer.appendChild(itemLabel);
    clickItem.appendChild(contentContainer);

    const itemAction = document.createElement("div");
    itemAction.className = "af-click-item__action";
    itemAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>`;
    clickItem.appendChild(itemAction);

    item.appendChild(clickItem);
    ul.appendChild(item);
  });

  list.appendChild(ul);

  return list;
};
