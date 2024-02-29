import type { Args, Meta, StoryObj } from "@storybook/html";
import "./Action.scss";

const meta: Meta = {
  args: {
    className: "btn af-btn--circle",
    href: "http://axafrance.github.io",
    id: "id",
    onClick: () => {},
    role: "link",
    tabIndex: 0,
    target: "_blank",
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
    href: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    icon: {
      control: "text",
      table: {
        type: { summary: "text" },
      },
    },
    id: {
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
    role: {
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
    target: {
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
          <a
              class="${args.className}${args.classModifier !== "" ? ` af-btn--circle--${args.classModifier}` : ""}"
              href=${args.href}
              id=${args.id}
              onclick=${args.onClick()}
              role="${args.role}"
              tabIndex=${args.tabIndex}
              target=${args.target}
              title=${args.title}
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
    classModifier: "",
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
