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
};

const verticalArgs = {
  isVertical: true,
  label:
    "Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",
  value: "Les incendies, explosions, implosions, fumée et foudre",
  buttonText: "En savoir plus",
  classModifier: [],
};

export const ContentDuoItemDefault: StoryObj<
  Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
    classModifier: string[];
  }
> = {
  render: ({ classModifier, ...args }) => (
    <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />
  ),
  args: {
    ...defaultArgs,
    classModifier: ["small"],
  },
};

export const ContentDuoItemLarge: StoryObj<
  Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
    classModifier: string[];
  }
> = {
  render: ({ classModifier, ...args }) => (
    <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />
  ),
  args: {
    ...defaultArgs,
    classModifier: ["large"],
  },
};

export const ContentDuoItemVertical: StoryObj<
  Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
    classModifier: string[];
  }
> = {
  render: ({ classModifier, ...args }) => (
    <ContentItemDuo classModifier={classModifier.join(" ")} {...args} />
  ),
  args: verticalArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
