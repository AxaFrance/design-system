import type { Meta, StoryObj } from "@storybook/html";
import "../Logo/Logo.scss";
import "./Name.scss";

const meta: Meta = {
  title: "Agent/Components/Header/Name",
};

export default meta;

export const Default: StoryObj = {
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}${args.classModifier !== "" ? `${args.className}--${args.classModifier}` : ""}">
            <a class="af-logo" href="/#" onclick="${args.onClick}">
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
    classModifier: "",
    className: "af-header__name",
    img: "../../storybook-static/assets/react.svg",
    onClick: () => {},
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    alt: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "logo" },
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
    img: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    onClick: {
      action: "clicked",
      control: "function",
      table: {
        type: { summary: "function" },
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
  },
};
