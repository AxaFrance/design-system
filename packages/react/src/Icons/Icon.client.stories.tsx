import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icons.client";
import "./Icon.client.stories.css";
import type { MaterialIcon } from "./types";
import { MaterialIcons } from "./types/constants";

const meta: Meta = {
  title: "Client/Icons",
};

export default meta;

export const Example: StoryObj = {
  name: "Icon",
  render: ({ ...args }) => <Icon name="headphones" {...args} />,
  args: {},
};

export const AllIcons: StoryObj = {
  render: () => {
    return (
      <ul className="icon-list">
        {MaterialIcons.map((name: MaterialIcon) => {
          return (
            <li key={name}>
              <Icon name={name} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
