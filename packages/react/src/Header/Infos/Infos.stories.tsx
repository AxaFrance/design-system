import { Args, Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithoutRef } from "react";
import { Infos } from "./Infos";

const meta: Meta<typeof Infos> = {
  component: Infos,
  title: "Components/Header/Infos",
};

export default meta;

export const Default: StoryObj<ComponentPropsWithoutRef<typeof Infos>> = {
  render: ({ infos, ...args }: Partial<Args>) => (
    <Infos infos={infos} {...args} />
  ),
  args: {
    classModifier: "",
    className: "",
    infos: [
      { word: "Customer :", definition: "0123456789 - NOM" },
      { word: "Wallet:", definition: "000123456789" },
      { word: "Status :", definition: "New business" },
    ],
  },
  argTypes: {
    infos: {
      control: "object",
      table: {
        type: { summary: "object" },
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
  },
};
