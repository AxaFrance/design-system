import type { Args, Meta, StoryObj } from "@storybook/html";
import "./User.scss";

const meta: Meta = {
  args: {
    children: "",
    className: "af-info-user",
    classModifier: "",
    name: "Pierre Martin",
    onClick: () => {},
    profile: "profile",
    title: "Voir mon profil",
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
    href: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    name: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    onClick: {
      action: "onClick",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    profile: {
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
  render: (args: Partial<Args>) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}${args.classModifier !== "" ? ` ${args.className}--${args.classModifier}` : ""}">
            ${
              args.href
                ? `
                <a class="${args.className}__link" href=${args.href} title="${args.title}" onclick="${args.onClick}" >
                    <span class="${args.className}__name">
                        ${args.name}
                    </span>
                    <span class="${args.className}__profile">
                        ${args.profile}
                    </span>
                </a>
              `
                : `
                <span class="${args.className}__name">
                    ${args.name}
                </span>
                <span class="${args.className}__profile">
                    ${args.profile}
                </span>
              `
            }
            ${args.children}
        </div>
    `;

    return container;
  },
  title: "Agent/Components/Header/User",
};

export default meta;

export const UserWithLink: StoryObj = {
  name: "User With Link",
  args: {
    href: "/#",
  },
};

export const UserWithoutLink: StoryObj = {
  name: "User Without link",
};
