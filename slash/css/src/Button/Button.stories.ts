import type { Meta, StoryObj } from "@storybook/html";
import "./Button.scss";

const meta: Meta = {
  title: "Components/✅ Button",
  parameters: {
    layout: "centered",
  },
};

export default meta;

const demoSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>`;

const demoGlyphicon = `
  <i class="glyphicon glyphicon-pencil"></i>`;

const VARIANT_CLASSES = ["primary", "secondary", "validated", "danger"];

const SIZE_CLASSES = ["default", "small"];

export const Button: StoryObj = {
  render: (args) => {
    const btn = document.createElement("button");

    btn.classList.add("af-btn");

    if (args.disabled) {
      btn.disabled = true;
    }

    if (args.variant !== "primary") {
      btn.classList.add(`af-btn--${args.variant}`);
    }

    if (args.size !== "default") {
      btn.classList.add(`af-btn--${args.size}`);
    }

    const getIcon = (type: string) => {
      if (type === "svg") return demoSvg;
      if (type === "glyphicon") return demoGlyphicon;
      return "";
    };
    const leftIcon = getIcon(args.leftIcon);
    const rightIcon = getIcon(args.rightIcon);

    btn.innerHTML = `${leftIcon}
  ${args.label}${rightIcon}
`;

    return btn;
  },
  args: {
    label: "Button",
    disabled: false,
    variant: "primary",
    size: "default",
    leftIcon: "",
    rightIcon: "",
  },
  argTypes: {
    variant: {
      options: VARIANT_CLASSES,
      control: {
        type: "select",
      },
    },
    size: {
      options: SIZE_CLASSES,
      control: {
        type: "select",
      },
    },
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
  },
};
