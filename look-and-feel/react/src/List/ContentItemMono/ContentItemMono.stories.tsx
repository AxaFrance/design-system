import arrowForward from "@material-symbols/svg-400/rounded/arrow_forward.svg";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Svg } from "../../Svg";
import { List } from "../List";
import { ContentItemMono } from "./ContentItemMono";
import { ContentItemMonoSize } from "./constants";

const meta: Meta<typeof ContentItemMono> = {
  title: "Look-and-feel/Components/List/ContentItemMono",
  component: ContentItemMono,
};

export default meta;

const defaultArgs: ComponentProps<typeof ContentItemMono> = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "Texte tertiaire",
  size: ContentItemMonoSize.M,
  isDisabled: false,
  leftElement: "",
  isLeftElementCentered: false,
  hasStick: false,
  classModifier: "",
};

const contentItemMonoWithIconArgs: ComponentProps<typeof ContentItemMono> = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "Texte tertiaire",
  size: ContentItemMonoSize.M,
  isDisabled: false,
  leftElement: <Svg src={arrowForward} />,
  isLeftElementCentered: true,
  hasStick: false,
  classModifier: "",
};

const contentItemMonoWithStickArgs: ComponentProps<typeof ContentItemMono> = {
  children: "Texte principal",
  secondaryText: "Texte secondaire",
  tertiaryText: "",
  size: ContentItemMonoSize.M,
  isDisabled: false,
  leftElement: "",
  isLeftElementCentered: false,
  hasStick: true,
  classModifier: "",
};

export const Default: StoryObj<typeof ContentItemMono> = {
  name: "Default",
  render: (args) => <ContentItemMono {...args} />,
  args: defaultArgs,
  argTypes: {
    size: {
      options: Object.values(ContentItemMonoSize),
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoWithIcon: StoryObj<typeof ContentItemMono> = {
  name: "ContentItemMono With Icon",
  render: (args) => <ContentItemMono {...args} />,
  args: contentItemMonoWithIconArgs,
  argTypes: {
    size: {
      options: Object.values(ContentItemMonoSize),
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoWithStick: StoryObj<typeof ContentItemMono> = {
  name: "ContentItemMono With Stick",
  render: (args) => <ContentItemMono {...args} />,
  args: contentItemMonoWithStickArgs,
  argTypes: {
    size: {
      options: Object.values(ContentItemMonoSize),
      control: { type: "select" },
      defaultValue: "m",
    },
  },
};

export const ContentItemMonoList: StoryObj<
  {
    items: (ComponentProps<typeof ContentItemMono> & { id: string })[];
  } & Omit<ComponentProps<typeof List>, "classModifier"> & {
      classModifier: string[];
    }
> = {
  name: "ContentItemMono List",
  render: ({ items, classModifier, ...args }) => (
    <List classModifier={classModifier.join(" ")} {...args}>
      {items.map((itemsArgs) => (
        <ContentItemMono key={itemsArgs.id} {...itemsArgs} />
      ))}
    </List>
  ),
  args: {
    items: [
      { id: "1", ...defaultArgs },
      { id: "2", ...contentItemMonoWithIconArgs },
      { id: "3", ...contentItemMonoWithStickArgs },
    ],
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large", "first-separator-full-width"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
