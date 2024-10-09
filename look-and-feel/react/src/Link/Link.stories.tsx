import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

export const Default: StoryObj<typeof Link> = {
  args: {
    href: "https://fakelink.com",
    openInNewTab: true,
    children: "My link",
  },
};
