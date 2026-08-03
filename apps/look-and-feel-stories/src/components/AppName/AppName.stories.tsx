import { AppName } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppName> = {
  title: "Components/AppName",
  component: AppName,
};

export default meta;

export const Playground: StoryObj<typeof AppName> = {
  args: {
    label: "Mon application",
    logoLinkProps: {
      href: "/",
    },
  },
};
