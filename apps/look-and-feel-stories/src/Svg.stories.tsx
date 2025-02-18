import { Svg } from "@axa-fr/design-system-look-and-feel-react";
import closeIcons from "@material-symbols/svg-400/outlined/close.svg";
import headphonesIcons from "@material-symbols/svg-400/outlined/headphones.svg";
import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import saveIcons from "@material-symbols/svg-400/outlined/save.svg";
import type { Meta, StoryObj } from "@storybook/react";
import "./Svg.stories.css";

const meta: Meta = {
  title: "Components/Svg",
  component: Svg,
};

export default meta;

const MODIFIERS: Record<string, string> = {
  "/public/headphones.svg": headphonesIcons,
  "/public/home.svg": homeIcons,
  "/public/save.svg": saveIcons,
  "/public/close.svg": closeIcons,
  "simulate svg error": "foo",
};

export const Default: StoryObj<typeof Svg> = {
  name: "Svg",
  render: ({ src, ...args }) => <Svg src={MODIFIERS[src]} {...args} />,
  args: {
    src: "/public/headphones.svg",
    fill: "#00008f",
    width: 24,
    height: 24,
    alt: "error",
  },
  argTypes: {
    src: {
      options: Object.keys(MODIFIERS),
      control: { type: "select" },
    },
  },
};

export const Headphones: StoryObj<typeof Svg> = {
  name: "Svg Headphones",
  render: () => <Svg src={headphonesIcons} fill="#00008f" />,
};
