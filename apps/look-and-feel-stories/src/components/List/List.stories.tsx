import {
  ClickItem,
  ContentItemMono,
  List,
  type ListProps,
  ContentItemDuo,
  ContentItemDuoAction,
} from "@axa-fr/canopee-react/client";
import trashIcon from "@material-symbols/svg-400/outlined/delete.svg";
import publishedWithChangesIcon from "@material-symbols/svg-400/outlined/published_with_changes-fill.svg";
import walletIcon from "@material-symbols/svg-400/outlined/account_balance_wallet-fill.svg";
import checkIcon from "@material-symbols/svg-400/outlined/check-fill.svg";
import closeIcon from "@material-symbols/svg-400/outlined/close-fill.svg";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: "Components/List/List",
  component: List,
};
export default meta;

const render = (args: ListProps) => <List {...args} />;

export const Default: StoryObj<typeof List> = {
  name: "ClickItem List",
  render,
  args: {
    children: [
      <ClickItem key={0} icon={walletIcon} subtitle="Information" />,
      <ClickItem
        key={1}
        icon={publishedWithChangesIcon}
        subtitle="Modifier le profil"
      />,
      <ClickItem key={2} icon={trashIcon} subtitle="Supprimer le profil" />,
    ],
  },
};

export const ContentItemMonoPictureList: StoryObj<typeof List> = {
  name: "ContentItemMono Picture List",
  render,
  args: {
    children: [...Array(3).keys()].map((child) => (
      <ContentItemMono
        key={child}
        type="picture"
        picture="https://i.pinimg.com/originals/c4/28/f1/c428f1822d619e3ce4ad0ef7fa30d009.jpg"
        title="Titre"
        subtitle="Sous titre"
      />
    )),
  },
};

export const ContentItemMonoList: StoryObj<typeof List> = {
  name: "ContentItemMono List",
  render,
  args: {
    children: [
      <ContentItemMono key={0} type="icon" title="Sous titre" />,
      ...Array.from({ length: 2 }, (_, index) => index + 1).map((child) => (
        <ContentItemMono
          key={child}
          type="icon"
          title="Success info"
          iconProps={{
            src: checkIcon,
            variant: "primary",
            size: "XS",
          }}
        />
      )),
      ...Array.from({ length: 2 }, (_, index) => index + 3).map((child) => (
        <ContentItemMono
          key={child}
          type="icon"
          title="Error info"
          iconProps={{
            src: closeIcon,
            variant: "primary",
            size: "XS",
          }}
        />
      )),
    ],
  },
};

export const ContentItemDuoList: StoryObj<typeof List> = {
  name: "ContentItemDuo List",
  render,
  args: {
    children: [...Array(3).keys()].map((child) => (
      <ContentItemDuo
        key={child}
        label="label"
        value="réponse"
        buttonText="En savoir plus"
      />
    )),
  },
};

export const ContentItemDuoActionList: StoryObj<typeof List> = {
  name: "ContentItemDuoAction List",
  render,
  args: {
    children: [...Array(3).keys()].map((child) => (
      <ContentItemDuoAction
        key={child}
        contentItemProps={{
          type: "icon",
          iconProps: {
            hasBackground: true,
            src: walletIcon,
          },
          title: "Texte principale",
          subtitle1: "Texte secondaire",
          subtitle2: "Texte tertiare",
        }}
        state="toggle"
      />
    )),
  },
};
