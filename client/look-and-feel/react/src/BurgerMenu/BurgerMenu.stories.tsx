import { Meta, StoryObj } from "@storybook/react";
import { BurgerMenu, TBurgerMenuPops } from "./BurgerMenu";
import { ButtonClient, Variants } from "../Button/Button";

const meta: Meta<TBurgerMenuPops> = {
  title: "Components/Burger-Menu",
  component: BurgerMenu,
};

export default meta;
export const Default: StoryObj<TBurgerMenuPops> = {
  render: ({ items, className, children }) => {
    return (
      <BurgerMenu items={items} className={className} handleClose={() => false}>
        {children}
      </BurgerMenu>
    );
  },
  args: {
    items: [
      {
        label: "test",
        isDisabled: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ),
      },
      {
        label: "test",
        isDisabled: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ) as unknown as string,
      },
    ],
  },
};

export const WithLastButton: StoryObj<TBurgerMenuPops> = {
  render: ({ items, className, children }) => {
    return (
      <BurgerMenu items={items} className={className} handleClose={() => false}>
        {children}
      </BurgerMenu>
    );
  },
  args: {
    items: [
      {
        label: "test",
        isDisabled: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ),
      },
      {
        label: "test",
        isDisabled: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
          </svg>
        ),
      },
    ],
    children: (
      <ButtonClient variant={Variants.tertiary}>Déconnexion</ButtonClient>
    ),
  },
};
