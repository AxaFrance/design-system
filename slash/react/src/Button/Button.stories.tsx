import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import arrowForwardIcons from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import arrowBackIcons from "@material-symbols/svg-400/outlined/arrow_back.svg";
import { Button } from "./Button";
import { Svg } from "../Svg";

const CssIcons: Record<string, string> = {
  "(none)": "none",
  "/public/arrow_back.svg": arrowBackIcons,
  "/public/arrow_forward.svg": arrowForwardIcons,
  "glyphicon arrow-left": "arrow-left",
  "glyphicon arrow-right": "arrow-right",
};

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    size: "default",
    disabled: false,
    leftIcon: "(none)",
    rightIcon: "(none)",
  },
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: "select",
      },
    },
    size: {
      control: {
        type: "select",
      },
    },
    leftIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
    rightIcon: {
      options: Object.keys(CssIcons),
      control: { type: "select" },
    },
  },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Button>,
  "leftIcon" | "rightIcon"
> & {
  leftIcon: string;
  rightIcon: string;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Button",
  render: ({ leftIcon, rightIcon, ...props }) => {
    const getIcon = (type: string) => {
      switch (type) {
        case "/public/arrow_forward.svg":
        case "/public/arrow_back.svg":
          return <Svg src={CssIcons[type]} />;
        case "glyphicon arrow-left":
        case "glyphicon arrow-right":
          return <i className={`glyphicon glyphicon-${CssIcons[type]}`} />;
        default:
          return undefined;
      }
    };

    const leftIconProps = getIcon(leftIcon);
    const rightIconProps = getIcon(rightIcon);

    return (
      <Button leftIcon={leftIconProps} rightIcon={rightIconProps} {...props} />
    );
  },
};

export const Primary: Story = {
  name: "Button Primary",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    children: "Button Primary",
    onClick: undefined,
    variant: undefined,
    size: undefined,
  },
};

export const Secondary: Story = {
  name: "Button Secondary",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "Button Secondary",
    variant: "secondary",
  },
};

export const Validated: Story = {
  name: "Button Validated",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "Button Validated",
    variant: "validated",
  },
};

export const Danger: Story = {
  name: "Button danger",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "Button Danger",
    variant: "danger",
  },
};

export const WithIconRight: Story = {
  name: "Button with right svg icon",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "With right svg icon",
    rightIcon: "/public/arrow_forward.svg",
  },
};

export const WithIconLeft: Story = {
  name: "Button with left glyphicon icon",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "With left glyphicon icon",
    leftIcon: "glyphicon arrow-left",
  },
};

export const Small: Story = {
  name: "Button small",
  render: Playground.render,
  tags: ["!dev"],
  args: {
    ...Primary.args,
    children: "Button Small",
    size: "small",
  },
};
