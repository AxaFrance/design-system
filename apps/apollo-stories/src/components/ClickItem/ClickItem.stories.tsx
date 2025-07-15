import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import type { ComponentProps } from "react";
import {
  ClickItem,
  clickItemStates,
  type ClickItemStates,
  clickItemVariants,
  type ClickItemVariants,
  type TagVariants,
} from "@axa-fr/design-system-apollo-react";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

const meta: Meta<typeof ClickItem> = {
  title: "Components/List/ClickItem",
  component: ClickItem,
};

export default meta;

const baseArgs = {
  icon: accountBalance,
  title: "Titre",
  subtitle: "Sous-titre",
  tagLabel: "Texte",
  tagProps: { variant: "info" as TagVariants },
  state: "default" as ClickItemStates,
  ariaLabelForActionIcon: "Aller à la page de détails",
  onClick: action("ClickItem has been clicked"),
};

const defaultArgTypes = {
  state: {
    options: Object.values(clickItemStates),
    control: { type: "select" },
  },
  variant: {
    options: Object.values(clickItemVariants),
    control: { type: "select" },
  },
};

export const ClickItemDefault: StoryObj<ComponentProps<typeof ClickItem>> = {
  name: "ClickItem",
  render: ({ ...args }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    basePictureProps: { src: "https://picsum.photos/48", alt: "random image" },
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    variant: "large" as ClickItemVariants,
  },
  argTypes: defaultArgTypes,
};

export const ClickItemLargeStory: StoryObj<ComponentProps<typeof ClickItem>> = {
  name: "ClickItem Large",
  render: ({ ...args }) => <ClickItem {...args} />,
  args: {
    ...baseArgs,
    textSecondary: "Texte secondaire",
    textTertiary: "Texte tertiaire",
    variant: "large",
  },
  argTypes: defaultArgTypes,
};

export const ClickItemMediumStory: StoryObj<ComponentProps<typeof ClickItem>> =
  {
    name: "ClickItem Medium",
    render: ({ ...args }) => <ClickItem {...args} />,
    args: {
      ...baseArgs,
      variant: "medium",
    },
    argTypes: { state: defaultArgTypes.state },
  };

export const ClickItemSmallStory: StoryObj<ComponentProps<typeof ClickItem>> = {
  name: "ClickItem Small",
  render: ({ ...args }) => <ClickItem {...args} />,
  args: {
    icon: accountBalance,
    title: "Titre",
    state: "default" as ClickItemStates,
    variant: "small" as ClickItemVariants,
  },
  argTypes: { state: defaultArgTypes.state },
};

export const ClickItemAgentStory: StoryObj<ComponentProps<typeof ClickItem>> = {
  name: "ClickItem Agent",
  render: ({ ...args }) => <ClickItem {...args} />,
  args: {
    basePictureProps: {
      src: "https://picsum.photos/48",
      alt: "random image",
    },
    title: "Titre",
    subtitle: "Sous-titre",
    state: "default" as ClickItemStates,
    variant: "agent" as ClickItemVariants,
    ariaLabelForActionIcon: "Aller à la page de détails",
    onClick: action("ClickItem has been clicked"),
  },
  argTypes: { state: defaultArgTypes.state },
};
