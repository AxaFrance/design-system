import type { Meta, StoryObj } from "@storybook/react";
import { IconCustom } from "./IconCustom.client";
import "./Icon.client.stories.css";
import type { CustomIcon } from "./types";
import { CustomIcons } from "./types/constants";

const meta: Meta = {
  title: "Client/IconsCustom",
};

export default meta;

export const Example: StoryObj = {
  name: "IconCustom",
  render: ({ ...args }) => <IconCustom name="facebook" {...args} />,
  args: {},
};

export const AllIconsCustom: StoryObj = {
  render: () => {
    return (
      <ul className="icon-list">
        {CustomIcons.map((name: CustomIcon) => {
          return (
            <li key={name}>
              <IconCustom name={name} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
