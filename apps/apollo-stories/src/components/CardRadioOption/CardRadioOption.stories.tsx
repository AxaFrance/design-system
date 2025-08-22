import { CardRadioOption } from "@axa-fr/design-system-apollo-react";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import accountBalanceIcon from "@material-symbols/svg-400/outlined/account_balance-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const ICONS: Record<string, string | undefined> = {
  homeIcon,
  accountBalanceIcon,
  none: undefined,
};

const meta: Meta<
  ComponentProps<typeof CardRadioOption> & {
    iconVariant: "icon" | "base picture";
  }
> = {
  title: "Components/Form/Radio/CardRadioOption",
  component: CardRadioOption,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
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
      if: { arg: "type", eq: "horizontal" },
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
    type: "vertical",
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

export const CardRadioOptionStory: StoryObj<
  ComponentProps<typeof CardRadioOption>
> = {
  name: "Playground",
  render: ({
    icon,
    type,
    description,
    subtitle,
    name,
    value,
    ...args
  }: ComponentProps<typeof CardRadioOption>) => (
    <CardRadioOption
      {...args}
      icon={ICONS[icon ?? "none"]}
      type={type === "horizontal" ? type : undefined}
      value={value !== "" ? value : undefined}
      name={name !== "" ? name : undefined}
      description={description !== "" ? description : undefined}
      subtitle={subtitle !== "" ? subtitle : undefined}
    />
  ),
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.type === "horizontal" ? 500 : 300 }}>
        <Story />
      </div>
    ),
  ],
};
