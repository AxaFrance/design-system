import type { Meta, StoryObj } from "@storybook/react";
import headphonesIcons from "@material-symbols/svg-400/outlined/headphones.svg";
import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import saveIcons from "@material-symbols/svg-400/outlined/save.svg";
import closeIcons from "@material-symbols/svg-400/outlined/close.svg";
import "./Svg.stories.css";
import { Svg } from "./index";

const meta: Meta = {
  title: "Look-and-feel/Components/Svg",
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
