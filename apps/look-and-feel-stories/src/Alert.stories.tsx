import { Alert, Button, Link } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";

const MODIFIERS = ["information", "neutral", "error", "validation", "warning"];

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};
export default meta;

export const Default: StoryObj<typeof Alert> = {
  args: {
    title: "My Alert title",
    type: "information",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: (
      <Link openInNewTab href="https://fakelink.com">
        Plus de détails
      </Link>
    ),
    iconSize: 24,
  },
  argTypes: {
    type: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: "information",
    },
  },
};

export const WithButtonAction: StoryObj<typeof Alert> = {
  name: "Alert with Button action",
  args: {
    title: "My Alert title",
    type: "information",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    action: <Button variant="ghost">Actualiser</Button>,
    iconSize: 24,
  },
};
