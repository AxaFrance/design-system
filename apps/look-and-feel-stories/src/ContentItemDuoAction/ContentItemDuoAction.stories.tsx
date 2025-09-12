import { Meta, StoryObj } from "@storybook/react";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import { ContentItemDuoAction } from "@axa-fr/design-system-apollo-react";
import { ComponentProps } from "react";

const meta: Meta<typeof ContentItemDuoAction> = {
  component: ContentItemDuoAction,
  title: "Components/ContentItemDuoAction",
};

export default meta;
type ContentItemDuoActionProps = ComponentProps<typeof ContentItemDuoAction>;

type Story = StoryObj<ContentItemDuoActionProps>;

export const Playground: Story = {
  name: "toggle",
  render: (props: ContentItemDuoActionProps) => (
    <ContentItemDuoAction {...props} />
  ),
  args: {
    mode: "toggle",
    contentItemProps: {
      type: "icon",
      icon: bank,
      title: "Texte principale",
      subtitle1: "Texte secondaire",
      subtitle2: "Texte tertiare",
    },
  },
};

export const PictureLStory: Story = {
  name: "edit",
  render: (props: ContentItemDuoActionProps) => (
    <ContentItemDuoAction {...props} />
  ),
  args: {
    mode: "edit",
    onEditButtonClick: () => console.log("Edit button clicked"),
    onDeleteButtonClick: () => console.log("Delete button clicked"),
    contentItemProps: {
      type: "icon",
      icon: bank,
      title: "Texte principale",
      subtitle1: "Texte secondaire",
      subtitle2: "Texte tertiare",
    },
  },
};
