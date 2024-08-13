import type { Meta, StoryObj } from "@storybook/html";
import "./User.scss";

const meta: Meta = {
  args: {
    children: "",
    className: "af-info-user",
    name: "Pierre Martin",
    profile: "profile",
    title: "Voir mon profil",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
  render: (args) => {
    const container = document.createElement("div");
    container.innerHTML = `
        <div class="${args.className}">
            ${
              args.href
                ? `
                <a class="${args.className}__link" href=${args.href} title="${args.title}" onclick="${args.onClick()}" >
                    <span class="${args.className}__name">
                        ${args.name}
                    </span>
                    <span class="${args.className}__profile">
                        [${args.profile}]
                    </span>
                </a>
              `
                : `
                <span class="${args.className}__name">
                    ${args.name}
                </span>
                <span class="${args.className}__profile">
                    [${args.profile}]
                </span>
              `
            }
            ${args.children}
        </div>
    `;

    return container;
  },
  title: "Slash/Components/Header/User",
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
