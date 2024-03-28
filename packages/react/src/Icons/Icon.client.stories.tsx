import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName } from "./Icon.client";
import "./Icon.client.stories.css";
import { icons } from "./converted/svg/filled";

const meta: Meta = {
  title: "Client/Icons",
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Icon>,
  "name" | "size" | "fill" | "styleType"
> & {
  name: IconName;
  size: number;
  fill: string;
  styleType: "filled" | "outlined" | "round" | "sharp" | "two-tone";
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Icon",
  render: ({ name, size, fill, styleType, ...args }) => (
    <Icon name={name} size={size} fill={fill} styleType={styleType} {...args} />
  ),
  args: {
    name: "VideogameAsset",
    styleType: "filled",
    size: 56,
    fill: "#00008f",
  },
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(icons),
    },
    styleType: {
      control: { type: "select" },
      options: ["filled", "outlined", "round", "sharp", "two-tone"],
    },
  },
};

export const AllIcons: StoryObj = {
  name: "All Icons",
  render: () => {
    return (
      <ul className="icon-list">
        {Object.keys(icons).map((name) => {
          return (
            <li key={name}>
              <Icon name={name as IconName} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
