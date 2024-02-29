import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Title.scss";
import "../../Action/Action.scss";

const meta: Meta = {
  args: {
    className: "af-title-bar",
    isSticky: true,
    subtitle: "Info complémentaire",
    title: "Toolkit Axa",
    toggleMenu: () => {},
  },
  argTypes: {
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
    children: {
      control: "object",
      table: {
        type: { summary: "object" },
      },
    },
    isSticky: {
      control: "boolean",
      table: {
        type: { summary: "boolean" },
      },
    },
    subtitle: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    title: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    toggleMenu: {
      action: "onToggle",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
  },
  render: (args: Partial<Args>) => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="${args.className}${args.classModifier !== "" ? ` ${args.className}--${args.classModifier}` : ""}${args.isSticky ? ` ${args.className}--sticky` : ""}">
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
                  onclick="${args.toggleMenu}"
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
  title: "Agent/Components/Header/Title",
};

export default meta;

export const DefaultTitle: StoryObj = {
  args: {
    children: "",
    classModifier: "",
    isSticky: true,
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
    classModifier: "",
    isSticky: true,
  },
};

export const NonStickyComplexTitle: StoryObj = {
  name: "Non Sticky Complex Title",
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
    classModifier: "",
    isSticky: false,
  },
};
