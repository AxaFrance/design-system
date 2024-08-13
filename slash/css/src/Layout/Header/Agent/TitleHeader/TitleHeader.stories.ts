import type { Meta, StoryObj } from "@storybook/html";
import "./TitleHeader.scss";
import "../../../../Action/Action.scss";

const MODIFIERS = ["sticky", "fixed"];

const meta: Meta = {
  args: {
    className: "af-title-bar",
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
  },
  argTypes: {
    toggleMenu: { action: "onToggle" },
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "sticky",
    },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="${args.className}${args.classModifier ? ` ${args.className}--${args.classModifier}` : ""}">
          <div class="container ${args.className}__wrapper">
              <div class="burger-container">
                <a 
                  id="togglemenu" 
                  title="Toggle menu" 
                  aria-controls="mainmenu" 
                  aria-haspopup="true" 
                  class="btn ${args.className}__mobile-menu af-btn--circle" 
                  href="/#" 
                  role="button" 
                  tabindex="0" 
                  ontoggle="${args.toggleMenu()}"
                >
                    <i class="glyphicon glyphicon-menu-hamburger"></i>
                </a>
              </div>
              <h1 class="${args.className}__title">
                ${args.title}
                <small class="${args.className}__subtitle">${args.subtitle}</small>
              </h1>
              ${args.children}
          </div>
      </div>
    `;

    return container;
  },
  title: "Slash/Components/Header/TitleHeader",
};

export default meta;

export const DefaultTitle: StoryObj = {
  args: {
    children: "",
  },
};

export const ComplexTitle: StoryObj = {
  name: "Complex Title",
  args: {
    children: `
      <div class="af-title-bar__actions">
        <a class="af-title-bar__link" href="/#" title="lien titlebar">
          lien titlebar
        </a>
        <a title="Enregistrer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-floppy-disk"></i>
        </a>
        <a title="Imprimer" class="btn af-btn--circle" href="/#" role="button" tabindex="0">
          <i class="glyphicon glyphicon-print"></i>
        </a>
      </div>`,
  },
};
