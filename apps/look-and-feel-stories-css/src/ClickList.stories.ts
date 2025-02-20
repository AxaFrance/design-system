import "@axa-fr/design-system-look-and-feel-css/dist/Card/Card.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/ClickList/ClickList.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
import type { Meta, StoryObj } from "@storybook/html";
import { render, type TClickList } from "./ClickListRender";

const meta: Meta = {
  title: "Components/List/ClickList",
};

export default meta;

export const ClickListWithIcon: StoryObj<TClickList> = {
  render,
  args: {
    items: [
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
        classModifier: "small",
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: false,
        classModifier: "large",
      },
      {
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 5h2v3h10V5h2v6h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="m18.01 13-1.42 1.41 1.58 1.58H12v2h6.17l-1.58 1.59 1.42 1.41 3.99-4z"/>
          </svg>`,
        label: "Texte principal",
        isDisabled: true,
      },
    ],
    cardClassModifier: "",
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickListWithoutIcon: StoryObj<TClickList> = {
  render,
  args: {
    items: [
      {
        label: `
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,
        isDisabled: false,
      },
      {
        label: `
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,
        isDisabled: true,
      },
    ],
    cardClassModifier: "",
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};

export const ClickListLinkWithoutIcon: StoryObj<TClickList> = {
  render,
  args: {
    items: [
      {
        label: `
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
        isDisabled: false,
      },
      {
        label: `
          <h3 class="af-click-item__title">Fiche Orias précontractuelle</h3>
          <p class="af-click-item__subtitle">30 novembre 2021</p>
          <p class="af-click-item__secondary">Signé électroniquement</p>`,
        href: "https://github.com/AxaFrance/design-system",
        target: "_blank",
        isDisabled: true,
      },
    ],
    cardClassModifier: "",
  },
  argTypes: {
    cardClassModifier: {
      options: ["", "large"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};
