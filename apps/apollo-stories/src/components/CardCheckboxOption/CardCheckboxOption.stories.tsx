import { CardCheckboxOption } from "@axa-fr/canopee-react/prospect";
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
  title: "Components/Form/Checkbox/CardCheckboxOption",
  component: CardCheckboxOption,
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
    errorId: {
      table: {
        disable: true,
      },
    },
    hasError: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    type: "vertical",
    label: "Titre",
    description: "Sous-titre 1",
    subtitle: "Sous-titre 2",
    name: "foo",
    value: "bar",
    icon: "accountBalanceIcon",
    "aria-invalid": false,
  },
};

export default meta;

export const CardCheckboxOptionStory: StoryObj<
  ComponentProps<typeof CardCheckboxOption>
> = {
  name: "Playground",
  render: ({
    icon = "none",
    type,
    description,
    subtitle,
    name,
    value,
    ...args
  }) => (
    <CardCheckboxOption
      {...args}
      icon={ICONS[icon]}
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
