import { CardRadio } from "@axa-fr/canopee-react/prospect";
import accountBalanceIcon from "@material-symbols/svg-400/outlined/account_balance-fill.svg";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const ICONS: Record<string, string | undefined> = {
  homeIcon,
  accountBalanceIcon,
  none: undefined,
};

const meta: Meta<
  ComponentProps<typeof CardRadio> & {
    iconVariant: "icon" | "base picture";
  }
> = {
  title: "Components/Form/Radio/CardRadio",
  component: CardRadio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      control: { type: "inline-radio" },
      options: ["vertical", "horizontal"],
    },
    label: {
      control: "text",
    },
    description: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    iconVariant: {
      control: { type: "inline-radio" },
      options: ["icon", "base picture"],
      if: { arg: "position", eq: "horizontal" },
    },
    icon: {
      control: "select",
      options: Object.keys(ICONS),
      if: { arg: "iconVariant", eq: "icon" },
    },
    src: {
      if: { arg: "iconVariant", eq: "base picture" },
    },
  },
  args: {
    position: "vertical",
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "foo",
    value: "bar",
    isInvalid: false,
    iconVariant: "icon",
    icon: "accountBalanceIcon",
    src: "https://picsum.photos/48",
  },
};

export default meta;

export const CardRadioStory: StoryObj<ComponentProps<typeof CardRadio>> = {
  name: "Playground",
  render: ({
    icon,
    description,
    subtitle,
    name,
    value,
    ...args
  }: ComponentProps<typeof CardRadio>) => (
    <CardRadio
      {...args}
      icon={ICONS[icon ?? "none"]}
      value={value !== "" ? value : undefined}
      name={name !== "" ? name : undefined}
      description={description !== "" ? description : undefined}
      subtitle={subtitle !== "" ? subtitle : undefined}
    />
  ),
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.position === "horizontal" ? 500 : 300 }}>
        <Story />
      </div>
    ),
  ],
};
