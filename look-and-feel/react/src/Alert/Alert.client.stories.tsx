import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert.client";
import { Link } from "../Link/Link.client";

const MODIFIERS = ["information", "neutral", "error", "validation", "warning"];

const meta: Meta<typeof Alert> = {
  title: "Look-and-feel/Components/Alert",
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  name: "Default",
  args: {
    title: "My Alert title",
    type: "information",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    link: (
      <Link openInNewTab href="https://fakelink.com">
        Plus de détails
      </Link>
    ),
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "information",
    },
  },
};
