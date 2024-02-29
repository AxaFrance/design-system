import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Name } from "./Name";

const meta: Meta<typeof Name> = {
  component: Name,
  title: "Agent/Components/Header/Name",
};

export default meta;

export const Default: StoryObj<typeof Name> = {
  args: {
    alt: "Logo React",
    img: "../../../storybook-static/assets/react.svg",
    onClick: () => action("clicked"),
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    alt: {
      control: "text",
      table: {
        type: { summary: "text" },
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
    img: {
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
    subtitle: {
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
};
