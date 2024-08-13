import type { Meta, StoryObj } from "@storybook/html";
import "./NavBar.scss";

const meta: Meta = {
  title: "Slash/Components/Header/NavBar",
};

export default meta;

export const Default: StoryObj = {
  render: ({ activeIndex }) => {
    const container = document.createElement("div");

    container.innerHTML = `
        <button class="mask fade show" type="button"></button>
            <nav class="af-nav af-drawer left show" role="navigation" aria-label="Menu principal">
                <div class="container af-nav__wrapper">
                    <div class="af-nav__aside-header">
                        <h4 class="af-nav__aside-title">Menu</h4><a class="af-nav__aside-close" href="#" role="button" aria-haspopup="true" aria-controls="idmenu" id="menubutton">×</a>
                    </div>
                    <ul class="af-nav__list" role="menubar" aria-labelledby="menubutton" id="idmenu">
                        <li class="af-nav__item${activeIndex === 0 ? " af-nav__item--active" : ""}" role="none">
                          <a class="af-nav__link" role="menuitem" href="/home" tabindex="0">Home</a>
                        </li>
                        <li class="af-nav__item af-nav__item--haschild${activeIndex === 1 ? " af-nav__item--active" : ""}" role="none">
                          <a class="af-nav__link" role="menuitem" href="/table" tabindex="-1" aria-haspopup="aria-haspopup" aria-expanded="aria-expanded">Table</a>
                          <svg class="glyphicon glyphicon-arrow-xs-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                              <path d="M86.799 36.75h-73.299l36.654 35.636 36.645-35.636z"></path>
                          </svg>
                          <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Table">
                              <li class="af-nav__item" role="none"><a class="af-nav__link" role="menuitem" href="/table/sous-lien" tabindex="-1">Sous lien</a></li>
                              <li class="af-nav__item" role="none"><a class="af-nav__link" role="menuitem" href="/table/sous-lien2" tabindex="-1">Sous lien 2</a></li>
                          </ul>
                        </li>
                        <li class="af-nav__item${activeIndex === 2 ? " af-nav__item--active" : ""}" role="none">
                          <a class="af-nav__link" role="menuitem" href="/accordion" tabindex="-1">Accordions</a>
                        </li>
                        <li class="af-nav__item af-nav__item--haschild${activeIndex === 3 ? " af-nav__item--active" : ""}" role="none">
                          <a class="af-nav__link" role="menuitem" href="/doc" tabindex="-1" aria-haspopup="aria-haspopup" aria-expanded="aria-expanded">Doc</a>
                          <svg class="glyphicon glyphicon-arrow-xs-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                              <path d="M86.799 36.75h-73.299l36.654 35.636 36.645-35.636z"></path>
                          </svg>
                          <ul class="af-nav__list af-nav__list--children" role="menu" aria-label="Doc">
                              <li class="af-nav__item" role="none"><a class="af-nav__link" role="menuitem" href="/doc/sous-lien" tabindex="-1">Sous lien</a></li>
                              <li class="af-nav__item" role="none"><a class="af-nav__link" role="menuitem" href="/doc/sous-lien2" tabindex="-1">Sous lien 2</a></li>
                          </ul>
                        </li>
                    </ul>
                </div>
            </nav>`;

    container.className = "af-nav-container";

    return container;
  },
  args: {
    activeIndex: 0,
  },
  argTypes: {
    activeIndex: {
      control: { type: "number", min: 0, max: 3 },
    },
  },
};
