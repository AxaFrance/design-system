import type { Meta, StoryObj } from "@storybook/html";
import "../Logo/Logo.scss";
import "./Name.scss";
import logo from "../../../../common/assets/logo-axa.svg";

const meta: Meta = {
  title: "Slash/Components/Header/Name",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}">
            <a class="af-logo" href="/#" onclick="${args.onClick()}">
                <img class="af-logo__brand" src=${args.img} alt=${args.alt} />
            </a>
            <h2 class="af-header__title">
                ${args.title}
                <span class="af-header__subtitle">
                        ${args.subtitle}
                </span>
            </h2>
        </div>
    `;

    return container;
  },
  args: {
    alt: "Logo React",
    className: "af-header__name",
    img: logo,
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};
