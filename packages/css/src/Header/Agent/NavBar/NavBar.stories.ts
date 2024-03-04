import type { Meta, StoryObj } from "@storybook/html";
import "../Drawer/Drawer.scss";
import "./NavBar.scss";

const meta: Meta = {
  title: "Agent/Components/Header/Navigation",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
    <div class="${args.className}">
        <button 
          aria-controls='${args.id}'
          aria-haspopup="true"
          type="button" 
          class="mask fade show" 
          id="open-${args.toggleMenuId}" 
          aria-label="Open Menu" 
          onclick="${args.onClick()}">
        </button>
        <nav class="af-nav af-drawer left ${args.isVisible ? "show" : ""}" role="navigation" aria-label="Menu principal">
          <div class="container af-nav__wrapper">
              <div class="af-nav__aside-header">
                <h4 class="af-nav__aside-title">Menu</h4>
                <button aria-controls=${args.id}' aria-haspopup="true" type="button" class="af-nav__aside-close" id="close-${args.toggleMenuId}" aria-label="Close Menu">×</button>
              </div>
              <ul class="af-nav__list" role="menubar" id='${args.id}' onkeydown="${args.handleKeys()}" onfocus="${args.onFocus()}" onblur="${args.onBlur()}">
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
      <li class="af-nav__item" role="none"><a href="/#" class="af-nav__link" index="0" role="menuitem" tabindex="-1" aria-expanded="false">Home</a></li>
      <li class="af-nav__item--haschild af-nav__item" role="none">
        <span class="af-nav__link" aria-haspopup="true" aria-expanded="false" index="1" role="menuitem" tabindex="-1">Table</span><i class="glyphicon glyphicon-arrow-xs-down"></i>
        <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Table">
            <li class="af-nav__item" role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien</a></li>
            <li class="af-nav__item" role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien 2</a></li>
        </ul>
      </li>
      <li class="af-nav__item af-nav__item--active" role="none"><a href="/#" class="af-nav__link" index="2" role="menuitem" tabindex="0" aria-expanded="false">Accordions</a></li>
      <li class="af-nav__item--haschild af-nav__item" role="none">
        <a href="/doc" class="af-nav__link" aria-haspopup="true" aria-expanded="false" index="3" role="menuitem" tabindex="-1">Doc</a>
        <i class="glyphicon glyphicon-arrow-xs-down"></i>
        <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Table">
            <li class="af-nav__item" role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien</a></li>
            <li class="af-nav__item" role="none"><a href="/#" class="af-nav__link" role="menuitem" tabindex="-1" aria-expanded="false">Sous lien2</a></li>
        </ul>
      </li>
    `,
    className: "af-nav",
    id: "mainmenu",
    isMenuFocused: false,
    isVisible: true,
    toggleMenuId: "togglemenu",
  },
  argTypes: {
    handleKeys: { action: "onKeyDown" },
    onBlur: { action: "onBlur" },
    onClick: { action: "onClick" },
    onFocus: { action: "onFocus" },
  },
};
