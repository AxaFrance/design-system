import {
  Button,
  Svg,
  type ButtonVariants,
  buttonVariants,
} from "@axa-fr/design-system-look-and-feel-react";
import accountBalance from "@material-symbols/svg-400/outlined/account_balance.svg";
import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import biotech from "@material-symbols/svg-400/outlined/biotech.svg";
import code from "@material-symbols/svg-400/outlined/code.svg";
import fireExtinguisher from "@material-symbols/svg-400/outlined/fire_extinguisher.svg";
import heartBroken from "@material-symbols/svg-400/outlined/heart_broken.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Button>,
  "children" | "variant" | "disabled" | "loading" | "iconLeft" | "iconRight"
> & {
  children: string;
  variant: ButtonVariants;
  disabled: boolean;
  loading: boolean;
  iconLeft: ReactNode;
  iconRight: ReactNode;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Button",
  render: ({
    children: text,
    variant,
    disabled,
    iconLeft,
    iconRight,
    onClick,
    ...args
  }) => (
    <Button
      variant={variant}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      onClick={onClick}
      {...args}
    >
      {text}
    </Button>
  ),
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: Object.values(buttonVariants),
      control: { type: "multi-select" },
    },
    iconLeft: {
      control: { type: "text" },
    },
    iconRight: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export const Business: StoryObj<typeof Button> = {
  name: "Button business",
  args: {
    children: "Button Business",
    variant: buttonVariants["primary-business"],
    disabled: false,
  },
};

export const Secondary: StoryObj<typeof Button> = {
  name: "Button secondary",
  args: {
    children: "Button Secondary",
    variant: buttonVariants.secondary,
    disabled: false,
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  name: "Button tertiary",
  args: {
    children: "Button Tertiary",
    variant: buttonVariants.tertiary,
    disabled: false,
  },
};

export const Ghost: StoryObj<typeof Button> = {
  name: "Button ghost",
  args: {
    children: "Button Ghost",
    variant: buttonVariants.ghost,
    disabled: false,
  },
};

export const MultiExamples: StoryObj<typeof Button> = {
  name: "Button examples",
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "2rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Button>Button Default</Button>
        <Button disabled>Button Disabled</Button>
        <Button variant={buttonVariants["primary-business"]}>
          Button Business
        </Button>
        <Button variant={buttonVariants["primary-business"]} disabled>
          Button Business Disabled
        </Button>
        <Button variant={buttonVariants.secondary}>Button Secondary</Button>
        <Button variant={buttonVariants.secondary} disabled>
          Button Secondary Disabled
        </Button>

        <Button variant={buttonVariants.tertiary}>Button Tertiary</Button>
        <Button variant={buttonVariants.tertiary} disabled>
          Button Tertiary Disabled
        </Button>
        <Button variant={buttonVariants.ghost}>Button Ghost</Button>
        <Button iconRight={<Svg src={arrowBack} />}>test</Button>
        <Button
          variant={buttonVariants.secondary}
          iconRight={<Svg src={code} />}
        >
          With icon
        </Button>
        <Button
          variant={buttonVariants.tertiary}
          iconLeft={<Svg src={fireExtinguisher} />}
        >
          With icon
        </Button>
        <Button
          variant={buttonVariants["primary-business"]}
          iconRight={<Svg src={biotech} />}
        >
          With icon
        </Button>
        <Button
          variant={buttonVariants.ghost}
          iconLeft={<Svg src={accountBalance} />}
          iconRight={<Svg src={heartBroken} />}
        >
          With icon MULTI
        </Button>
        <Button
          variant="primary"
          iconLeft={<Svg src={accountBalance} />}
          loading
        >
          Button Primary Loading
        </Button>
      </div>
    );
  },
};

export const WithIconRight: StoryObj<typeof Button> = {
  name: "Button with right icon",
  args: {
    children: "With icon",
    iconRight: <Svg src={heartBroken} />,
    disabled: false,
  },
};

export const WithIconLeft: StoryObj<typeof Button> = {
  name: "Button with left icon",
  args: {
    children: "With icon",
    iconLeft: <Svg src={heartBroken} />,
    disabled: false,
  },
};
