import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Action.scss";

const meta: Meta = {
  args: {
    href: "http://axafrance.github.io",
    id: "id",
    target: "_blank",
    onClick: () => {},
  },
  argTypes: {
    icon: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    href: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    tabIndex: {
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0 },
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
    role: {
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
  },
  render: (args: Partial<Args>) => {
    const container = document.createElement("div");
    container.innerHTML = `
          <a
              class="btn af-btn--circle${args.classModifier ? ` af-btn--circle--${args.classModifier}` : ""}"
              href=${args.href}
              target=${args.target}
              title=${args.title}
              onclick=${args.onClick()}
          >
              <i class="glyphicon glyphicon-${args.icon}"></i>
          </a>
      `;

    return container;
  },
  title: "Components/Action",
};

export default meta;

export const ActionLink: StoryObj = {
  name: "Action Link",
  args: {
    icon: "link",
    title: "Rediriger",
  },
};

export const ActionButton: StoryObj = {
  name: "Action Button",
  args: {
    classModifier: "axa",
    icon: "floppy-disk",
    title: "Enregistrer",
  },
};
