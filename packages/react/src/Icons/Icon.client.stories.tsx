import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@mui/icons-material";
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
    return (
      <ul className="icon-list">
        {Object.values(Icons).map((Comp: Icons.SvgIconComponent) => {
          return (
            <li key={Comp.muiName}>
              <Comp />
              <span>key</span>
            </li>
          );
        })}
      </ul>
    );
  },
};
