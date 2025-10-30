import {
  TabBar,
  tabBarDirection,
  TabBarProps,
} from "@axa-fr/design-system-apollo-react/lf";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof TabBar> = {
  component: TabBar,
  title: "Components/TabBar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = ComponentProps<typeof TabBar>;

export const TabBarStory: StoryObj<StoryProps> = {
  name: "TabBar",
  render: (args) => <TabBar {...args} />,
  args: {
    items: [
      { title: "Mes contrats", content: "Mon numéro de contrat, lorem ipsum " },
      { title: "Mes informations", content: "Mes informations, lorem ipsum" },
      { title: "Mes paramètres", content: "Mes paramètres, lorem ipsum" },
    ],
    preSelectedTabIndex: 0,
  },
  argTypes: {
    items: {
      control: { type: "object" },
    },
    preSelectedTabIndex: {
      control: { type: "number" },
    },
    direction: {
      control: "select",
      options: ["default", "center"],
    },
  },
};

export const TabBarWithReactNodeStory: StoryObj<typeof TabBar> = {
  name: "TabBarWithReactNode",
  render: (args) => <TabBar {...args} />,
  args: {
    items: [
      {
        title: "ReactNode tab 1",
        content: (
          <>
            <h2>Titre 1</h2>
            <p>Content 1</p>
          </>
        ) as TabBarProps["items"][0]["content"],
      },
      {
        title: "ReactNode tab 2",
        content: (
          <>
            <h2>Titre 2</h2>
            <p>Content 2</p>
          </>
        ) as TabBarProps["items"][0]["content"],
      },
      {
        title: "ReactNode tab 3",
        content: (
          <>
            <h2>Titre 3</h2>
            <p>Content 3</p>
          </>
        ) as TabBarProps["items"][0]["content"],
      },
    ],
    direction: tabBarDirection.center,
    preSelectedTabIndex: 0,
  },
};
