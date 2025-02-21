import type { Meta, StoryObj } from "@storybook/html";
import "@axa-fr/design-system-look-and-feel-css/dist/Button/Button.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/dist/common/assets/logo-axa.svg";
import { getNavBar, render } from "./HeaderRender";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";

const meta: Meta = {
  title: "Components/Header",
  args: {
    logo,
    alt: "Logo AXA",
  },
};

export default meta;

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
  render,
  args: {
    links: ["MES CONTRATS", "MES AVANTAGES", "MES DOCUMENTS"],
  },
};
