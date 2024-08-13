import type { Args, Meta, StoryObj } from "@storybook/html";
import logo from "../../../common/assets/logo-axa.svg";
import "./Header.client.scss";
import "../../../Button/Button.client.scss";
import "./NavBar/NavBar.scss";
import "./PreviousLink/PreviousLink.scss";

const meta: Meta = {
  title: "Look-and-feel/Components/Header",
  args: {
    logo,
    alt: "Logo AXA",
  },
};

export default meta;

const getNavBar = (args: Args) => {
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

const getButton = (
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

const getPreviousLink = () => {
  const container = document.createElement("div");
  container.className = "af-header-previous-link-container";
  container.innerHTML = `
        <svg class="af-header-previous-link-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.19123 7.82522L8.16936 12.8036L6.99998 13.9611L0.0389404 7.00002L6.99998 0.0270996L8.16936 1.19647L3.19123 6.17481H13.9729V7.82522H3.19123Z" fill="#5F5F5F"/>
        </svg>
        <a class="af-header-previous-link" href="#">
          Retour à l'accueil
        </a>
    `;

  return container;
};

export const Default: StoryObj = {
  render: (args) => {
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

    leftItem.append(imgLogo);
    container.append(leftItem);
    header.append(container);

    return header;
  },
};

export const HeaderWithLinks: StoryObj = {
  name: "Header with links",
  render: (args) => {
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

    leftItem.append(imgLogo);
    leftItem.append(navBar);
    container.append(leftItem);
    header.append(container);

    return header;
  },
  args: {
    links: ["MES CONTRATS", "MES AVANTAGES", "MES DOCUMENTS"],
  },
};

export const HeaderWithLinksAndRightItem: StoryObj = {
  name: "Header with links and right item",
  render: (args) => {
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
      "ghost",
    );
    const banckingSpaceButton = getButton(
      "Espace Banque",
      `
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.68939 18.1042C1.2355 18.1042 0.846957 17.9426 0.523763 17.6194C0.200568 17.2962 0.0389709 16.9076 0.0389709 16.4537V7.62415C0.0389709 7.16707 0.200568 6.77575 0.523763 6.45019C0.846957 6.12464 1.2355 5.96186 1.68939 5.96186H2.9121V4.22103C2.9121 3.07603 3.30911 2.10255 4.10314 1.30061C4.89703 0.498803 5.86244 0.0979004 6.99939 0.0979004C8.13633 0.0979004 9.10196 0.498803 9.89626 1.30061C10.6907 2.10255 11.0879 3.07603 11.0879 4.22103V5.96186H12.3106C12.7677 5.96186 13.159 6.12464 13.4846 6.45019C13.8102 6.77575 13.9729 7.16707 13.9729 7.62415V16.4537C13.9729 16.9076 13.8102 17.2962 13.4846 17.6194C13.159 17.9426 12.7677 18.1042 12.3106 18.1042H1.68939ZM7.00356 13.6431C7.44564 13.6431 7.82293 13.4901 8.13543 13.1842C8.44793 12.8782 8.60418 12.5103 8.60418 12.0806C8.60418 11.6639 8.44675 11.2855 8.13189 10.9452C7.81703 10.6049 7.43855 10.4348 6.99647 10.4348C6.55439 10.4348 6.1771 10.6049 5.8646 10.9452C5.5521 11.2855 5.39585 11.6674 5.39585 12.091C5.39585 12.5146 5.55328 12.8792 5.86814 13.1848C6.183 13.4903 6.56147 13.6431 7.00356 13.6431ZM4.56251 5.96186H9.43751V4.22373C9.43751 3.52984 9.20286 2.94575 8.73356 2.47144C8.26411 1.99714 7.688 1.75998 7.00522 1.75998C6.32244 1.75998 5.7446 1.99714 5.27168 2.47144C4.7989 2.94575 4.56251 3.52984 4.56251 4.22373V5.96186Z" fill="#00008F"/>
          </svg>
        `,
      undefined,
      "secondary",
    );

    leftItem.append(imgLogo);
    leftItem.append(navBar);
    rightItem.append(banckingSpaceButton);
    rightItem.append(profileButton);
    container.append(leftItem);
    container.append(rightItem);
    header.append(container);

    return header;
  },
  args: {
    links: ["MES CONTRATS", "MES AVANTAGES", "MES DOCUMENTS"],
  },
};

export const HeaderWithLinksAndRightItemAndHomeLink: StoryObj = {
  name: "Header with links, profile button and Home link",
  render: (args) => {
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
      "ghost",
    );
    const banckingSpaceButton = getButton(
      "Espace Banque",
      `
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.68939 18.1042C1.2355 18.1042 0.846957 17.9426 0.523763 17.6194C0.200568 17.2962 0.0389709 16.9076 0.0389709 16.4537V7.62415C0.0389709 7.16707 0.200568 6.77575 0.523763 6.45019C0.846957 6.12464 1.2355 5.96186 1.68939 5.96186H2.9121V4.22103C2.9121 3.07603 3.30911 2.10255 4.10314 1.30061C4.89703 0.498803 5.86244 0.0979004 6.99939 0.0979004C8.13633 0.0979004 9.10196 0.498803 9.89626 1.30061C10.6907 2.10255 11.0879 3.07603 11.0879 4.22103V5.96186H12.3106C12.7677 5.96186 13.159 6.12464 13.4846 6.45019C13.8102 6.77575 13.9729 7.16707 13.9729 7.62415V16.4537C13.9729 16.9076 13.8102 17.2962 13.4846 17.6194C13.159 17.9426 12.7677 18.1042 12.3106 18.1042H1.68939ZM7.00356 13.6431C7.44564 13.6431 7.82293 13.4901 8.13543 13.1842C8.44793 12.8782 8.60418 12.5103 8.60418 12.0806C8.60418 11.6639 8.44675 11.2855 8.13189 10.9452C7.81703 10.6049 7.43855 10.4348 6.99647 10.4348C6.55439 10.4348 6.1771 10.6049 5.8646 10.9452C5.5521 11.2855 5.39585 11.6674 5.39585 12.091C5.39585 12.5146 5.55328 12.8792 5.86814 13.1848C6.183 13.4903 6.56147 13.6431 7.00356 13.6431ZM4.56251 5.96186H9.43751V4.22373C9.43751 3.52984 9.20286 2.94575 8.73356 2.47144C8.26411 1.99714 7.688 1.75998 7.00522 1.75998C6.32244 1.75998 5.7446 1.99714 5.27168 2.47144C4.7989 2.94575 4.56251 3.52984 4.56251 4.22373V5.96186Z" fill="#00008F"/>
          </svg>
        `,
      undefined,
      "secondary",
    );

    const previousLink = getPreviousLink();

    leftItem.append(imgLogo);
    leftItem.append(navBar);
    rightItem.append(banckingSpaceButton);
    rightItem.append(profileButton);
    container.append(leftItem);
    container.append(rightItem);
    header.append(container);
    header.append(previousLink);

    return header;
  },
  args: {
    links: ["MES CONTRATS", "MES AVANTAGES", "MES DOCUMENTS"],
  },
};
