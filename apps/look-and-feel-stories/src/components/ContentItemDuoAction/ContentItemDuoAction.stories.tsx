import { Meta, StoryObj } from "@storybook/react";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import { Button, ContentItemDuoAction } from "@axa-fr/canopee-react/client";
import { ComponentProps } from "react";

const meta: Meta<typeof ContentItemDuoAction> = {
  component: ContentItemDuoAction,
  title: "Components/List/ContentItemDuoAction",
  args: {
    contentItemProps: {
      type: "icon",
      iconProps: {
        hasBackground: true,
        src: bank,
      },
      title: "Texte principale",
      subtitle1: "Texte secondaire",
      subtitle2: "Texte tertiare",
    },
    buttons: (
      <>
        <Button variant="ghost">Modifier</Button>
        <Button variant="ghost">Supprimer</Button>
      </>
    ),
  },
};

export default meta;
type ContentItemDuoActionProps = ComponentProps<typeof ContentItemDuoAction>;

type Story = StoryObj<ContentItemDuoActionProps>;

export const Playground: Story = {
  name: "ContentItemDuoAction",
  render: (props: ContentItemDuoActionProps) => (
    <ContentItemDuoAction {...props} />
  ),
  argTypes: {
    state: {
      options: ["edit", "toggle"],
      control: { type: "select" },
    },
    toggleProps: {
      control: { type: "object" },
    },
  },
};
