import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link.client";

const meta: Meta<typeof Link> = {
  title: "Look-and-feel/Components/Link",
  component: Link,
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  name: "Default",
  args: {
    href: "https://fakelink.com",
    openInNewTab: true,
    children: "My link",
  },
};
