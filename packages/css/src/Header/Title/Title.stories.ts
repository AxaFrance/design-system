import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Title.scss";

const meta: Meta = {
  args: {
    title: "Toolkit Axa",
    subtitle: "Info complémentaire",
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
        defaultValue: { summary: true },
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
      action: "toggled",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
  },
  render: (args: Partial<Args>) => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="af-title-bar">
          <div class="container af-title-bar__wrapper">
              <div class="burger-container">
                <a 
                  id="togglemenu" 
                  title="Toggle menu" 
                  aria-controls="mainmenu" 
                  aria-haspopup="true" 
                  class="btn af-title-bar__mobile-menu af-btn--circle" 
                  href="/#" 
                  role="button" 
                  tabindex="0" 
                >
                    <i class="glyphicon glyphicon-menu-hamburger"></i>
                </a>
              </div>
              <h1 class="af-title-bar__title">
                ${args.title}
                <small class="af-title-bar__subtitle">${args.subtitle}</small>
              </h1>
              ${args.children}
          </div>
      </div>
    `;

    return container;
  },
  title: "Components/Header/Title",
};

export default meta;

export const Default: StoryObj = {
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
