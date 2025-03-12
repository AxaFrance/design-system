import type { Args } from "@storybook/html";

const getAnchor = ({
  href,
  icon,
  label,
  isActive = false,
}: {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
}) => {
  const anchor = document.createElement("a");
  anchor.role = "menuitem";
  anchor.className = "af-navbar-item__link";

  anchor.className = [
    "af-navbar-item__link",
    isActive ? `af-navbar-item__link--active` : "",
  ].join(" ");

  anchor.href = href;
  anchor.innerHTML = `${icon}${label}`;

  return anchor;
};

export const getButton = ({
  label,
  icon,
  variant,
}: {
  label: string;
  icon?: string;
  variant?: "ghost" | "secondary";
}) => {
  const btn = document.createElement("button");
  btn.innerHTML = `${icon}${label}`;

  btn.className = [
    "af-btn-client",
    variant ? `af-btn-client--${variant}` : "",
  ].join(" ");

  return btn;
};

export const getClickItem = (children: string) => {
  const item = document.createElement("li");
  item.role = "none";
  item.className = "af-list__item";

  const anchor = document.createElement("a");
  anchor.role = "menuitem";
  anchor.className = ["af-click-item", "af-click-item--small"].join(" ");

  const content = document.createElement("div");
  content.className = "af-click-item__content";

  const label = document.createElement("div");
  label.className = "af-click-item__label";

  label.innerHTML = children;

  content.append(label);

  const action = document.createElement("div");
  action.className = "af-click-item__action";
  action.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  `;

  anchor.append(content);
  anchor.append(action);

  item.append(anchor);

  return item;
};

export const getBurgerMenu = (
  links: { href: string; icon: string; label: string }[],
  rightItem: {
    label: string;
    icon?: string;
  },
) => {
  const navBar = document.createElement("nav");
  navBar.role = "navigation";
  navBar.className = [
    "af-card",
    "af-card--list",
    "af-burger-menu",
    "open",
  ].join(" ");

  const list = document.createElement("ul");
  list.role = "menubar";

  if (links) {
    links.forEach(({ icon, label }: { icon: string; label: string }) =>
      list.append(getClickItem(`${icon}${label}`)),
    );
  }

  if (rightItem) {
    if (Array.isArray(rightItem)) {
      rightItem.forEach((item) =>
        list.append(getClickItem(`${item.icon}${item.label}`)),
      );
    } else {
      list.append(getClickItem(`${rightItem.icon}${rightItem.label}`));
    }
  }

  navBar.append(list);

  return navBar;
};

const getNavBar = (anchors: HTMLAnchorElement[]) => {
  const navBar = document.createElement("nav");
  navBar.role = "navigation";
  const list = document.createElement("ul");
  list.className = "af-navbar-container";
  list.role = "menubar";

  anchors.forEach((anchor) => {
    const item = document.createElement("li");
    item.role = "none";

    item.append(anchor);

    list.append(item);
  });

  navBar.append(list);

  return navBar;
};

export const render = (args: Args) => {
  const headerWrapper = document.createElement("div");
  const header = document.createElement("header");
  header.className = "af-header";

  const container = document.createElement("div");
  container.className = "af-header-container";

  const leftItem = document.createElement("div");
  leftItem.className = "af-header-left-item";

  const imgLogo = document.createElement("img");
  imgLogo.className = "af-logo";
  imgLogo.setAttribute("src", args.logo);
  imgLogo.setAttribute("alt", args.alt);
  leftItem.append(imgLogo);

  if (args.links) {
    const navBar = getNavBar(
      args.links.map(
        (link: {
          href: string;
          icon: string;
          label: string;
          isActive: boolean;
        }) => getAnchor({ ...link }),
      ),
    );
    leftItem.append(navBar);
  }

  container.append(leftItem);

  if (args.rightItem) {
    const rightItem = document.createElement("div");
    rightItem.className = "af-header-right-item";

    if (Array.isArray(args.rightItem)) {
      args.rightItem.forEach((item) =>
        rightItem.append(getButton({ ...item })),
      );
    } else {
      rightItem.append(args.rightItem);
    }

    container.append(rightItem);
  }

  if (args.links || args.rightItem) {
    const burgerMenuButton = document.createElement("button");
    burgerMenuButton.className = ["af-btn-client", "af-btn-client--ghost"].join(
      " ",
    );

    burgerMenuButton.innerHTML = `
      <div class="af-icon-bg">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.528961 17.697V15.0376H25.49V17.697H0.528961ZM0.528961 10.3203V7.67965H25.49V10.3203H0.528961ZM0.528961 2.96231V0.302979H25.49V2.96231H0.528961Z" fill="#00008F"/>
        </svg>
      </div>
    `;

    container.append(burgerMenuButton);
  }

  header.append(container);

  if (args.isBurgerMenuOpened) {
    header.append(getBurgerMenu(args.links, args.rightItem));
  }

  headerWrapper.append(header);

  if (args.previousLink) {
    const previousLinkContainer = document.createElement("div");
    previousLinkContainer.className = "af-header-previous-link-container";
    previousLinkContainer.innerHTML = args.previousLink;

    headerWrapper.append(previousLinkContainer);
  }

  const overlay = document.createElement("div");
  overlay.className = [
    "af-header-overlay",
    `${args.isBurgerMenuOpened ? "open" : ""}`,
  ].join(" ");

  headerWrapper.append(overlay);

  return headerWrapper;
};
