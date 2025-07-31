import { CardRadioOption } from "@axa-fr/design-system-apollo-react/lf";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import accountBalanceIcon from "@material-symbols/svg-400/outlined/account_balance-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const ICONS: Record<string, string | undefined> = {
  homeIcon,
  accountBalanceIcon,
  none: undefined,
};

const meta: Meta = {
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
    icon: {
      control: "select",
      options: Object.keys(ICONS),
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
    icon: "accountBalanceIcon",
  },
};

export default meta;

export const CardRadioOptionStory: StoryObj<
  ComponentProps<typeof CardRadioOption>
> = {
  name: "Playground",
  render: ({ icon = "none", ...args }) => (
    <CardRadioOption {...args} icon={ICONS[icon]} />
  ),
  decorators: [
    (Story, { args }) => (
      <div style={{ width: args.type === "horizontal" ? 500 : 300 }}>
        <Story />
      </div>
    ),
  ],
};
