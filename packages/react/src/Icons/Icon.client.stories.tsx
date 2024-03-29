import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./Icon.client";
import "./Icon.client.stories.css";

const meta: Meta = {
  title: "Client/Icons",
};

export default meta;

export const Example: StoryObj = {
  name: "Icon",
  render: ({ ...args }) => <Icons.Headphones {...args} />,
  args: {},
};

export const AllIcons: StoryObj = {
  render: () => {
    const obj = Object.keys(Icons);
    return (
      <ul className="icon-list">
        {Object.values(Icons).map((Comp: Icons.SvgIconComponent, idx) => {
          return (
            <li key={Comp.muiName}>
              <Comp />
              <span>{obj.at(idx)}</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
