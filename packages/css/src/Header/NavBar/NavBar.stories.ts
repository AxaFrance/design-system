import type { Meta, StoryObj } from "@storybook/html";
import "../Drawer/Drawer.scss";
import "./NavBar.scss";

const meta: Meta = {
  title: "Components/Header/Navigation",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="af-nav-container">
        <button aria-controls='${args.id}' aria-haspopup="true" type="button" class="mask fade show" id="open-${args.toggleMenuId}" aria-label="Open Menu"></button>
        <nav class="af-nav af-drawer left ${args.isVisible ? "show" : ""}" role="navigation" aria-label="Menu principal">
          <div class="container af-nav__wrapper">
              <div class="af-nav__aside-header">
                <h4 class="af-nav__aside-title">Menu</h4>
                <button aria-controls=${args.id}' aria-haspopup="true" type="button" class="af-nav__aside-close" id="close-${args.toggleMenuId}" aria-label="Close Menu">×</button>
              </div>
              <ul class="af-nav__list " role="menubar" id='${args.id}'>
                ${args.children}
              </ul>
          </div>
        </nav>
    </div>
    `;

    return container;
  },
  args: {
    children: `
      <li class="af-nav__item " role="none"><a href="/#" class="af-nav__link" index="0" role="menuitem" tabindex="-1" aria-expanded="false">Home</a></li>
      <li class="af-nav__item--haschild af-nav__item " role="none">
        <span class="af-nav__link" aria-haspopup="true" aria-expanded="false" index="1" role="menuitem" tabindex="-1">Table</span><i class="glyphicon glyphicon-arrow-xs-down"></i>
        <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Table">
            <li class="af-nav__item " role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien</a></li>
            <li class="af-nav__item " role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien2</a></li>
        </ul>
      </li>
      <li class="af-nav__item af-nav__item--active " role="none"><a href="/#" class="af-nav__link" index="2" role="menuitem" tabindex="0" aria-expanded="false">Accordions</a></li>
      <li class="af-nav__item--haschild af-nav__item " role="none">
        <a href="/doc" class="af-nav__link" aria-haspopup="true" aria-expanded="false" index="3" role="menuitem" tabindex="-1">Doc</a>
        <i class="glyphicon glyphicon-arrow-xs-down"></i>
        <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Table">
            <li class="af-nav__item " role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien</a></li>
            <li class="af-nav__item " role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien2</a></li>
        </ul>
      </li>
    `,
    id: "mainmenu",
    isMenuFocused: false,
    isVisible: true,
    toggleMenuId: "togglemenu",
  },
  argTypes: {
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    classModifier: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    className: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    handleKeys: {
      action: "keys handled",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    id: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "mainmenu" },
      },
    },
    isMenuFocused: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
    isVisible: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    onBlur: {
      action: "blured",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    onClick: {
      action: "clicked",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    onFocus: {
      action: "focused",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    toggleMenuId: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "togglemenu" },
      },
    },
  },
};
