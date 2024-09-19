import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Link } from "../Link/Link";
import { ButtonClient, Variants } from "../Button/Button";

const MODIFIERS = ["information", "neutral", "error", "validation", "warning"];

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
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
    action: <ButtonClient variant={Variants.ghost}>Actualiser</ButtonClient>,
    iconSize: 24,
  },
};
