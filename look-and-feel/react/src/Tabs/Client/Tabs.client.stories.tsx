import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import accessTime from "@material-symbols/svg-400/outlined/schedule.svg";
import bluetoothAudio from "@material-symbols/svg-400/outlined/bluetooth_searching.svg";
import { Direction, TabsClient } from "./Tabs.client";
import { Svg } from "../../Svg";

const meta: Meta<typeof TabsClient> = {
  component: TabsClient,
  title: "Look-and-feel/Components/Tabs",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof TabsClient>,
  "items" | "direction" | "preSelectedTabIndex"
> & {
  items: { title: string; content: string | ReactNode; icon?: ReactNode }[];
  preSelectedTabIndex?: number;
  direction?: Direction;
};

export const TabsStory: StoryObj<StoryProps> = {
  name: "Tabs",
  render: ({ items, preSelectedTabIndex, direction }) => {
    const props: React.ComponentProps<typeof TabsClient> = {
      items,
      preSelectedTabIndex,
    };

    if (direction === Direction.center) {
      props.direction = Direction.center;
    }

    return <TabsClient {...props} />;
  },
  args: {
    items: [
      { title: "Tab 1", content: "Content 1" },
      { title: "Tab 2", content: "Content 2", icon: <Svg src={accessTime} /> },
      { title: "Tab 3", content: "Content 3" },
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

export const TabsCenterDirectionStory: StoryObj<StoryProps> = {
  name: "TabsCenterDirection",
  render: (args) => <TabsClient {...args} />,
  args: {
    items: [
      { title: "Center tab 1", content: "Content 1" },
      {
        title: "Center tab 2",
        content: "Content 2",
        icon: <Svg src={accessTime} />,
      },
      {
        title: "Center tab 3",
        content: "Content 3",
        icon: <Svg src={bluetoothAudio} />,
      },
    ],
    preSelectedTabIndex: 0,
    direction: Direction.center,
  },
};

export const TabsWithReactNodeStory: StoryObj<typeof TabsClient> = {
  name: "TabsWithReactNode",
  render: (args) => <TabsClient {...args} />,
  args: {
    items: [
      {
        title: "ReactNode tab 1",
        content: (
          <>
            <h2>Titre 1</h2>
            <p>Content 1</p>
          </>
        ),
      },
      {
        title: "ReactNode tab 2",
        content: (
          <>
            <h2>Titre 2</h2>
            <p>Content 2</p>
          </>
        ),
      },
      {
        title: "ReactNode tab 3",
        content: (
          <>
            <h2>Titre 3</h2>
            <p>Content 3</p>
          </>
        ),
      },
    ],
    direction: Direction.center,
    preSelectedTabIndex: 0,
  },
};
