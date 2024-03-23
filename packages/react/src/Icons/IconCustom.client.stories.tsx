import type { Meta, StoryObj } from "@storybook/react";
import { IconCustom, IconName } from "./IconCustom.client";
import { icons } from "./converted/svg_custom";

import "./Icon.client.stories.css";

const meta: Meta = {
  title: "Client/IconsCustom",
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof IconCustom>,
  "name" | "size" | "fill"
> & {
  name: IconName;
  size: number;
  fill: string;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "IconCustom",
  render: ({ name, size, fill, ...args }) => (
    <IconCustom name={name} size={size} fill={fill} {...args} />
  ),
  args: {
    name: "Youtube",
    size: 56,
    fill: "red",
  },
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(icons),
    },
  },
};

export const AllIconsCustom: StoryObj = {
  name: "All Icons custom",
  render: () => {
    return (
      <ul className="icon-list">
        {Object.keys(icons).map((name) => {
          return (
            <li key={name}>
              <IconCustom name={name as IconName} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
