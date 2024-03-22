import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { ButtonClient, Variants } from "./Button.client";
import { Icon } from "../Icons/Icons.client";

const meta: Meta<typeof ButtonClient> = {
  component: ButtonClient,
  title: "Client/Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof ButtonClient>,
  "children" | "variant" | "disabled" | "iconLeft" | "iconRight"
> & {
  children: string;
  variant: Variants;
  disabled: boolean;
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
    <ButtonClient
      variant={variant}
      iconLeft={iconLeft}
      iconRight={iconRight}
      disabled={disabled}
      onClick={onClick}
      {...args}
    >
      {text}
    </ButtonClient>
  ),
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "multi-select" },
    },
    iconLeft: {
      control: { type: "input" },
    },
    iconRight: {
      control: { type: "input" },
    },
  },
};

export const Business: StoryObj<typeof ButtonClient> = {
  name: "Button business",
  args: {
    children: "Button Business",
    variant: Variants.business,
  },
};

export const Secondary: StoryObj<typeof ButtonClient> = {
  name: "Button secondary",
  args: {
    children: "Button Secondary",
    variant: Variants.secondary,
  },
};

export const SecondaryError: StoryObj<typeof ButtonClient> = {
  name: "Button secondary error",
  args: {
    children: "Button Secondary Error",
    variant: Variants.secondaryError,
  },
};

export const Tertiary: StoryObj<typeof ButtonClient> = {
  name: "Button tertiary",
  args: {
    children: "Button Tertiary",
    variant: Variants.tertiary,
  },
};

export const Ghost: StoryObj<typeof ButtonClient> = {
  name: "Button ghost",
  args: {
    children: "Button Ghost",
    variant: Variants.ghost,
  },
};

export const MultiExamples: StoryObj<typeof ButtonClient> = {
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
        <ButtonClient>Button Default</ButtonClient>
        <ButtonClient disabled>Button Disabled</ButtonClient>
        <ButtonClient variant={Variants.business}>Button Business</ButtonClient>
        <ButtonClient variant={Variants.business} disabled>
          Button Business Disabled
        </ButtonClient>
        <ButtonClient variant={Variants.secondary}>
          Button Secondary
        </ButtonClient>
        <ButtonClient variant={Variants.secondary} disabled>
          Button Secondary Disabled
        </ButtonClient>
        <ButtonClient variant={Variants.secondaryError}>
          Button Secondary Error
        </ButtonClient>
        <ButtonClient variant={Variants.secondaryError} disabled>
          Button Secondary Error Disabled
        </ButtonClient>
        <ButtonClient variant={Variants.tertiary}>Button Tertiary</ButtonClient>
        <ButtonClient variant={Variants.tertiary} disabled>
          Button Tertiary Disabled
        </ButtonClient>
        <ButtonClient variant={Variants.ghost}>Button Ghost</ButtonClient>
        <ButtonClient iconRight={<Icon name="arrow_back" fill="white" />}>
          test
        </ButtonClient>
        <ButtonClient
          variant={Variants.secondary}
          iconRight={<Icon name="code" fill="#00008F" />}
        >
          With icon
        </ButtonClient>
        <ButtonClient
          variant={Variants.tertiary}
          iconLeft={<Icon name="fire_extinguisher" fill="#00008F" />}
        >
          With icon
        </ButtonClient>
        <ButtonClient
          variant={Variants.business}
          iconRight={<Icon name="biotech" fill="white" />}
        >
          With icon
        </ButtonClient>
        <ButtonClient
          variant={Variants.ghost}
          iconLeft={<Icon name="account_balance" fill="#00008F" />}
          iconRight={<Icon name="heart_broken" fill="#00008F" />}
        >
          With icon MULTI
        </ButtonClient>
      </div>
    );
  },
};

export const WithIconRight: StoryObj<typeof ButtonClient> = {
  name: "Button with right icon",
  args: {
    children: "With icon",
    iconRight: <Icon name="heart_broken" />,
  },
};

export const WithIconLeft: StoryObj<typeof ButtonClient> = {
  name: "Button with left icon",
  args: {
    children: "With icon",
    iconLeft: <Icon name="heart_broken" />,
  },
};
