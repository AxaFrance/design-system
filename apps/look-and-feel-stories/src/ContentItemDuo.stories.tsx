import {
  ContentItemDuo,
  List,
} from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react-vite";
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

const verticalArgs = {
  isVertical: true,
  label:
    "Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",
  value: "Les incendies, explosions, implosions, fumée et foudre",
  buttonText: "En savoir plus",
  classModifier: [],
};

export const ContentItemDuoDefault: StoryObj<
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

export const ContentItemDuoLarge: StoryObj<
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

export const ContentItemDuoVertical: StoryObj<
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

export const DefaultContentItemDuoList: StoryObj<
  {
    items: Array<
      Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
        id: string;
        classModifier: string[];
      }
    >;
  } & Omit<ComponentProps<typeof List>, "classModifier"> & {
      classModifier: string[];
    }
> = {
  name: "Default ContentItemDuo List",
  render: ({ classModifier, items }) => (
    <List classModifier={classModifier.join(" ")}>
      {items.map(({ classModifier: itemClassModifier, ...itemArgs }) => (
        <ContentItemDuo
          key={itemArgs.id}
          classModifier={itemClassModifier.join(" ")}
          {...itemArgs}
        />
      ))}
    </List>
  ),
  args: {
    items: Array.from({ length: 3 }, (_, i) => ({
      id: i.toString(),
      ...defaultArgs,
    })),
    classModifier: ["extra-padding"],
  },
  argTypes: {
    classModifier: {
      options: ["extra-padding", "large"],
      control: { type: "multi-select" },
      defaultValue: ["extra-padding"],
    },
  },
};

export const VerticalContentItemDuoList: StoryObj<
  {
    items: Array<
      Omit<ComponentProps<typeof ContentItemDuo>, "classModifier"> & {
        id: string;
        classModifier: string[];
      }
    >;
  } & Omit<ComponentProps<typeof List>, "classModifier"> & {
      classModifier: string[];
    }
> = {
  name: "Vertical ContentItemDuo List",
  render: ({ classModifier, items }) => (
    <List classModifier={classModifier.join(" ")}>
      {items.map(({ classModifier: itemClassModifier, ...itemArgs }) => (
        <ContentItemDuo
          key={itemArgs.id}
          classModifier={itemClassModifier.join(" ")}
          {...itemArgs}
        />
      ))}
    </List>
  ),
  args: {
    items: Array.from({ length: 3 }, (_, i) => ({
      id: i.toString(),
      ...verticalArgs,
    })),
    classModifier: ["extra-padding"],
  },
  argTypes: {
    classModifier: {
      options: ["extra-padding", "large"],
      control: { type: "multi-select" },
      defaultValue: ["extra-padding"],
    },
  },
};
