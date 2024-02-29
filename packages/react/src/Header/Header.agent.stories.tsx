import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header.agent";
import { Infos } from "./Infos/Infos";
import { Name } from "./Name/Name";

const meta: Meta<typeof Header> = {
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
  component: Header,
  title: "Agent/Components/Header",
};

export default meta;

export const HeaderWithName: StoryObj<typeof Header> = {
  name: "Header With Name",
  args: {
    children: (
      <Name
        alt="Logo React"
        img="../../storybook-static/assets/react.svg"
        onClick={() => {}}
        subtitle="Baseline"
        title="Nom de l'application"
      />
    ),
  },
};

export const HeaderWithNameAndInfos: StoryObj<typeof Header> = {
  name: "Header With Name And Infos",
  args: {
    children: (
      <>
        <Name
          alt="Logo React"
          img="../../storybook-static/assets/react.svg"
          onClick={() => {}}
          subtitle="Baseline"
          title="Nom de l'application"
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
