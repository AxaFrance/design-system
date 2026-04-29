import { Button, Svg } from "@axa-fr/canopee-react/distributeur";
import arrowBackIcons from "@material-symbols/svg-400/outlined/arrow_back.svg";
import arrowForwardIcons from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import type { ComponentProps } from "react";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const CssIcons: Record<string, string> = {
  "(none)": "none",
  "/public/arrow_back.svg": arrowBackIcons,
  "/public/arrow_forward.svg": arrowForwardIcons,
  "glyphicon arrow-left": "arrow-left",
  "glyphicon arrow-right": "arrow-right",
};

type StoryProps = Omit<
  ComponentProps<typeof Button>,
  "leftIcon" | "rightIcon"
> & {
  leftIcon: string;
  rightIcon: string;
};

const meta = preview.type<{ args: StoryProps }>().meta({
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "!dev"],
  args: {
    onClick: fn(),
    children: "Button",
    variant: "primary",
    small: false,
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
      options: [
        "primary",
        "secondary",
        "validated",
        "danger",
        "ghost",
        "ghost-reverse",
      ],
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
});

export const Playground = meta.story({
  tags: ["dev"],
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
});

export const Primary = meta.story({
  name: "Button Primary",
  render: Playground.input.render,
  args: {
    children: "Button Primary",
    onClick: undefined,
    variant: undefined,
  },
});

export const Secondary = meta.story({
  name: "Button Secondary",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Secondary",
    variant: "secondary",
  },
});

export const Validated = meta.story({
  name: "Button Validated",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Validated",
    variant: "validated",
  },
});

export const Danger = meta.story({
  name: "Button danger",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Danger",
    variant: "danger",
  },
});

export const Ghost = meta.story({
  name: "Button ghost",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button ghost",
    variant: "ghost",
  },
});

export const GhostReverse = meta.story({
  name: "Button ghost-reverse",
  render: Playground.input.render,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "var(--axablue90)", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Primary.input.args,
    children: "Button ghost-reverse",
    variant: "ghost-reverse",
  },
});

export const WithIconRight = meta.story({
  name: "Button with right svg icon",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "With right svg icon",
    rightIcon: "/public/arrow_forward.svg",
  },
});

export const WithIconLeft = meta.story({
  name: "Button with left glyphicon icon",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "With left glyphicon icon",
    leftIcon: "glyphicon arrow-left",
  },
});

export const Small = meta.story({
  name: "Button small",
  render: Playground.input.render,
  args: {
    ...Primary.input.args,
    children: "Button Small",
    small: true,
  },
});
