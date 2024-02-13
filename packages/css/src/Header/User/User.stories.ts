import type { Args, Meta, StoryObj } from "@storybook/html";
import "./User.scss";

const meta: Meta = {
  args: {
    name: "Pierre Martin",
    profile: "profile",
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
      action: "clicked",
      control: "function",
      table: {
        type: { summary: "function" },
      },
    },
    path: {
      control: "text",
      table: {
        type: { summary: "text" },
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
        defaultValue: { summary: "Voir mon profil" },
      },
    },
  },
  render: (args: Partial<Args>) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="af-info-user">
            <a class="af-info-user__link" ${args.href ? `href=${args.href}` : ""} title="Voir mon profil">
                <span class="af-info-user__name">
                    ${args.name}
                </span>
                <span class="af-info-user__profile">
                    ${args.profile}
                </span>
            </a>
        </div>
    `;

    return container;
  },
  title: "Components/Header/User",
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
