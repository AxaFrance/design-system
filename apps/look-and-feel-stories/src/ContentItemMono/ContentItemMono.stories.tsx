import { Meta, StoryObj } from "@storybook/react";
import { ContentItemMono } from "@axa-fr/design-system-look-and-feel-react";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import { ComponentProps } from "react";

const meta: Meta<typeof ContentItemMono> = {
  component: ContentItemMono,
  title: "Components/ContentItemMono",
};

export default meta;

type ContentItemProps = ComponentProps<typeof ContentItemMono>;

type Story = StoryObj<ContentItemProps>;

export const Playground: Story = {
  name: "Picture",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "picture",
    picture:
      "https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",
    title: "Texte principale",
    subtitle: "Texte secondaire",
  },
};

export const PictureLStory: Story = {
  name: "PictureLarge",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "picture",
    picture:
      "https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg",
    title: "Texte principale",
    subtitle: "Texte secondaire",
    size: "large",
  },
};

export const IconStory: Story = {
  name: "Icon",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "icon",
    icon: bank,
    title: "Texte principale",
    subtitle1: "Texte secondaire",
    subtitle2: "Texte tertiare",
  },
};

export const StickStory: Story = {
  name: "Stick",
  render: (props: ContentItemProps) => <ContentItemMono {...props} />,
  args: {
    type: "stick",
    title: "Texte principale",
    subtitle: "Texte secondaire",
  },
};
