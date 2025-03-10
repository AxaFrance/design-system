import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Header.scss";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Infos/Infos.scss";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Logo/Logo.scss";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Name/Name.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  args: {
    className: "af-header",
    classModifier: "",
  },
  title: "Components/Header",
};

export default meta;

export const HeaderWithName: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}${
          args.classModifier !== ""
            ? ` ${args.className}--${args.classModifier}`
            : ""
        }">
            <div class="container ${args.className}__wrapper">
                <header class="${args.className}__content" role="banner">
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
            <img class="af-logo__brand" src=${logo} alt="Logo React" />
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
        <div class="${args.className}${
          args.classModifier !== ""
            ? ` ${args.className}--${args.classModifier}`
            : ""
        }">
            <div class="container ${args.className}__wrapper">
                <header class="${args.className}__content" role="banner">
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
            <img class="af-logo__brand" src=${logo} alt="Logo React" />
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
