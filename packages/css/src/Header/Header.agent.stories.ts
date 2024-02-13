import type { Meta, StoryObj } from "@storybook/html";
import "./Header.agent.scss";
import "./Logo/Logo.scss";
import "./Name/Name.scss";
import "./Infos/Infos.scss";

const meta: Meta = {
  title: "Components/Header",
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
  },
};

export default meta;

export const HeaderWithName: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="af-header">
            <div class="container af-header__wrapper">
                <header class="af-header__content" role="banner">
                  ${args.children}
                </header>
            </div>
        </div>
    `;

    return container;
  },
  args: {
    children: `
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src="../../storybook-static/assets/react.svg" alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>`,
  },
};

export const HeaderWithNameAndInfos: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="af-header">
            <div class="container af-header__wrapper">
                <header class="af-header__content" role="banner">
                    ${args.children}
                </header>
            </div>
        </div>
    `;

    return container;
  },
  args: {
    children: `
      <div class="af-header__name">
          <a class="af-logo" href="/#">
            <img class="af-logo__brand" src="../../storybook-static/assets/react.svg" alt="Logo React" />
          </a>
          <h2 class="af-header__title">
              Nom de l'application
              <span class="af-header__subtitle">
                Baseline
              </span>
          </h2>
      </div>
      <div class="af-contrat">
          <i class="glyphicon glyphicon-info-sign"></i>
          <dl class="af-contrat__list">
              <dt class="af-contrat__word">Client :</dt>
              <dd class="af-contrat__def">0123456789 - NOM</dd>
              <dt class="af-contrat__word">Portefeuille :</dt>
              <dd class="af-contrat__def">000123456789</dd>
              <dt class="af-contrat__word">Status :</dt>
              <dd class="af-contrat__def">Affaire nouvelle</dd>
          </dl>
      </div>`,
  },
};
