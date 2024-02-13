import { Args, Meta, StoryObj } from "@storybook/react";
import { ComponentPropsWithRef } from "react";
import { Header } from "./Header.agent";
import { Infos } from "./Infos/Infos";
import { Name } from "./Name/Name";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
  argTypes: {
    children: {
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
  render: ({ children, ...args }: Partial<Args>) => (
    <Header {...args}>{children}</Header>
  ),
};

export default meta;

export const HeaderWithName: StoryObj<ComponentPropsWithRef<typeof Header>> = {
  name: "Header With Name",
  args: {
    children: (
      <Name
        title="Nom de l'application"
        subtitle="Baseline"
        img="../../storybook-static/assets/react.svg"
        alt="Logo React"
      />
    ),
  },
};

export const HeaderWithNameAndInfos: StoryObj<
  ComponentPropsWithRef<typeof Header>
> = {
  name: "Header With Name And Infos",
  args: {
    children: (
      <>
        <Name
          title="Nom de l'application"
          subtitle="Baseline"
          img="../../storybook-static/assets/react.svg"
          alt="Logo React"
        />
        <Infos
          infos={[
            { word: "Customer :", definition: "0123456789 - NOM" },
            { word: "Wallet:", definition: "000123456789" },
            { word: "Status :", definition: "New business" },
          ]}
        />
      </>
    ),
  },
};
