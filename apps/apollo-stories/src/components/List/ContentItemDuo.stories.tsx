import { ContentItemDuo } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta<typeof ContentItemDuo> = {
  title: "Components/List/ContentItemDuo",
  component: ContentItemDuo,
};

export default meta;

const defaultArgs = {
  isVertical: false,
  label: "Libellé",
  value: "Réponse",
  buttonText: "En savoir plus",
  classModifier: [],
};

export const Default: StoryObj<
  Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
    classModifier: string[];
  }
> = {
  render: ({ classModifier, ...args }) => (
    <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />
  ),
  args: defaultArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
