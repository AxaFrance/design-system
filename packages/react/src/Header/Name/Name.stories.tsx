import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { action } from "@storybook/addon-actions";
import { Name } from "./Name";

const meta: Meta<typeof Name> = {
  component: Name,
  title: "Components/Header/Name",
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Name>> = {
  render: (args) => <Name {...args} />,
  args: {
    alt: "Logo React",
    img: "../../../storybook-static/assets/react.svg",
    onClick: () => action("click action"),
    subtitle: "Baseline",
    title: "Nom de l'application",
  },
  argTypes: {
    alt: {
      control: "text",
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "logo" },
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
      action: "clicked",
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
