import { Meta, StoryObj } from "@storybook/react";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import {
  actionStates,
  ContentItemDuoAction,
} from "@axa-fr/design-system-apollo-react/lf";
import { ComponentProps } from "react";
import { Button } from "@axa-fr/design-system-apollo-react";

const meta: Meta<typeof ContentItemDuoAction> = {
  component: ContentItemDuoAction,
  title: "Components/ContentItemDuoAction",
  args: {
    contentItemProps: {
      type: "icon",
      icon: bank,
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
    toggleProps: onclick,
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
      options: Object.values(actionStates),
      control: { type: "select" },
    },
    buttons: {},
  },
};
