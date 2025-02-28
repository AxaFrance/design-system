import type { Args } from "@storybook/html";

export const getButton = (
  label: string,
  iconLeft?: string,
  iconRight?: string,
  variant?: "ghost" | "secondary",
) => {
  const btn = document.createElement("button");
  btn.innerHTML = label;
  if (iconLeft) {
    btn.innerHTML = `${iconLeft}${btn.innerHTML}`;
  }
  if (iconRight) {
    btn.innerHTML = `${btn.innerHTML}${iconRight}`;
  }

  btn.className = [
    "af-btn-client",
    variant ? `af-btn-client--${variant}` : "",
  ].join(" ");

  return btn;
};

export const getPreviousLink = () => {
  const container = document.createElement("div");
  container.className = "af-header-previous-link-container";
  container.innerHTML = `
          <a class="af-btn-client af-btn-client--ghost af-btn-client--header-previous-link" href="#">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.19123 7.82522L8.16936 12.8036L6.99998 13.9611L0.0389404 7.00002L6.99998 0.0270996L8.16936 1.19647L3.19123 6.17481H13.9729V7.82522H3.19123Z" fill="#5F5F5F"/>
            </svg>
            Retour à l'accueil
          </a>
      `;

  return container;
};

export const getNavBar = (args: Args) => {
  const navBar = document.createElement("nav");
  const list = document.createElement("ul");
  list.className = "af-navbar-container";
  list.role = "menubar";
  list.innerHTML = `
          <li class="af-navbar-item" role="none"><a class="af-navbar-item__link af-navbar-item__link--active" role="menuitem" href="/mes-contrats">${args[0]}</a></li>
          <li class="af-navbar-item" role="none"><a class="af-navbar-item__link"  role="menuitem" href="/mes-avantages">${args[1]}</a></li>
          <li class="af-navbar-item" role="none"><a class="af-navbar-item__link" role="menuitem" href="/mes-documents">${args[2]}</a></li>
      `;

  navBar.append(list);

  return navBar;
};

export const render = (args: Args) => {
  const header = document.createElement("header");
  header.classList.add("af-header");

  const container = document.createElement("div");
  container.classList.add("af-header-container");

  const leftItem = document.createElement("div");
  leftItem.classList.add("af-header-left-item");

  const imgLogo = document.createElement("img");
  imgLogo.classList.add("af-logo");
  imgLogo.setAttribute("src", args.logo);
  imgLogo.setAttribute("alt", args.alt);

  const navBar = getNavBar(args.links);

  const rightItem = document.createElement("div");
  rightItem.classList.add("af-header-right-item");

  const profileButton = getButton(
    "Mon Profil",
    `
          <svg width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_320_699" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
            <rect y="0.5" width="20" height="20" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_320_699)">
              <path d="M10.0007 10.4805C9.08398 10.4805 8.33398 10.1888 7.75065 9.60547C7.16732 9.02214 6.87565 8.27214 6.87565 7.35547C6.87565 6.4388 7.16732 5.6888 7.75065 5.10547C8.33398 4.52214 9.08398 4.23047 10.0007 4.23047C10.9173 4.23047 11.6673 4.52214 12.2507 5.10547C12.834 5.6888 13.1257 6.4388 13.1257 7.35547C13.1257 8.27214 12.834 9.02214 12.2507 9.60547C11.6673 10.1888 10.9173 10.4805 10.0007 10.4805ZM3.33398 17.168V15.2096C3.33398 14.6819 3.46593 14.2305 3.72982 13.8555C3.99371 13.4805 4.33398 13.1957 4.75065 13.0013C5.68121 12.5846 6.57357 12.2721 7.42773 12.0638C8.2819 11.8555 9.13954 11.7513 10.0007 11.7513C10.8618 11.7513 11.7159 11.8589 12.5632 12.0742C13.4104 12.2895 14.2993 12.5985 15.2298 13.0013C15.6604 13.1957 16.0076 13.4805 16.2715 13.8555C16.5354 14.2305 16.6673 14.6819 16.6673 15.2096V17.168H3.33398Z" fill="#00008F"/>
            </g>
          </svg>
        `,
    undefined,
    "secondary",
  );

  leftItem.append(imgLogo);
  leftItem.append(navBar);
  rightItem.append(profileButton);
  container.append(leftItem);
  container.append(rightItem);
  header.append(container);

  return header;
};
