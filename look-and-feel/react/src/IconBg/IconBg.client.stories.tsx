import article from "@material-symbols/svg-400/outlined/article-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { IconBg } from ".";
import { Svg } from "../Svg";

const meta: Meta<typeof IconBg> = {
  title: "Look-and-feel/Components/IconBg",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  component: IconBg,
};

export default meta;

export const Default: StoryObj<typeof IconBg> = {
  name: "IconBg",
  render: (args) => <IconBg {...args} />,
  args: {
    children: <Svg src={article} />,
    isDisabled: false,
    classModifier: "secondary",
  },
};
