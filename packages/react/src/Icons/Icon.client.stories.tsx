import type { Meta, StoryObj } from "@storybook/react";
import { Headphones } from "@mui/icons-material";
import * as Icons from "@mui/icons-material";
import "./Icon.client.stories.css";

const meta: Meta = {
  title: "Look'n feel/Icons",
};

export default meta;

export const Example: StoryObj = {
  name: "Icon",
  render: ({ ...args }) => <Headphones {...args} />,
  args: {},
};

export const AllIcons: StoryObj = {
  render: () => {
    return (
      <ul className="icon-list">
        {Object.keys(Icons).map((x) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Comp = (Icons as any)[x];
          return (
            <li key={x}>
              <Comp />
              <span>{x}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
