import {
  Svg,
  Tabs,
  TabsDirection,
} from "@axa-fr/design-system-look-and-feel-react";
import bluetoothAudio from "@material-symbols/svg-400/outlined/bluetooth_searching.svg";
import accessTime from "@material-symbols/svg-400/outlined/schedule.svg";
import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Tabs",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Tabs>,
  "items" | "preSelectedTabIndex"
> & {
  items: { title: string; content: string | ReactNode; icon?: ReactNode }[];
  preSelectedTabIndex?: number;
};

export const TabsStory: StoryObj<StoryProps> = {
  name: "Tabs",
  render: ({ items, preSelectedTabIndex, direction }) => {
    const props: React.ComponentProps<typeof Tabs> = {
      items,
      preSelectedTabIndex,
    };

    if (direction === TabsDirection.center) {
      props.direction = TabsDirection.center;
    }

    return <Tabs {...props} />;
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
  render: (args) => <Tabs {...args} />,
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
    direction: TabsDirection.center,
  },
};

export const TabsWithReactNodeStory: StoryObj<typeof Tabs> = {
  name: "TabsWithReactNode",
  render: (args) => <Tabs {...args} />,
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
    direction: TabsDirection.center,
    preSelectedTabIndex: 0,
  },
};
