import type { Meta, StoryObj } from "@storybook/html";
import { render, TBurgerMenu } from "./render";
import "../List/ClickList/ClickList.scss";
import "../Card/Card.scss";
import "../List/List.scss";
import "./BurgerMenu.scss";
import "../Button/Button.scss";

const meta: Meta = {
  title: "Components/Burger-menu",
};

export default meta;

export const BurgerMenuStories: StoryObj<TBurgerMenu> = {
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
        label: "About",
        classModifier: "small",
        isDisabled: false,
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
      },
      {
        label: "Contact",
        isDisabled: false,
        icon: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
          </svg>`,
        classModifier: "small",
      },
    ],
  },
};
