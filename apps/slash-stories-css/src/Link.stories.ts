import "@axa-fr/design-system-slash-css/dist/Link/Link.scss";
import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Link",
};

export default meta;

const demoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
</svg>
`;

const demoGlyphicon = `
<i class="glyphicon glyphicon-pencil"></i>
`;

export const Link: StoryObj = {
  render: (args) => {
    const link = document.createElement("a");

    link.target = "_blank";
    link.classList.add("af-slash-link");
    link.href = args.href;
    if (args.disabled) {
      link.setAttribute("aria-disabled", "true");
    }
    const getIcon = (type: string) => {
      if (type === "svg") return demoSvg;
      if (type === "glyphicon") return demoGlyphicon;
      return "";
    };
    const leftIcon = getIcon(args.leftIcon);
    const rightIcon = getIcon(args.rightIcon);

    link.innerHTML = `${leftIcon}${args.label}${rightIcon}`;

    return link;
  },
  args: {
    label: "axa.fr",
    href: "https://www.axa.fr",
    disabled: false,
    leftIcon: "",
    rightIcon: "",
  },
  argTypes: {
    leftIcon: {
      options: ["", "svg", "glyphicon"],
      control: {
        type: "select",
        labels: {
          "": "(none)",
          svg: "SVG edit",
          glyphicon: "Glyphicon edit",
        },
      },
    },
    rightIcon: {
      options: ["", "svg", "glyphicon"],
      control: {
        type: "select",
        labels: {
          "": "(none)",
          svg: "SVG edit",
          glyphicon: "Glyphicon edit",
        },
      },
    },
    disabled: {
      description: "To disable the link, use `aria-disabled`.",
    },
  },
};
