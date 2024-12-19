import type { Meta, StoryObj } from "@storybook/html";
import "../../Button/Button.scss";
import "../../Card/Card.scss";
import "../List.scss";
import "./ContentItemDuo.scss";
import { contentItemDuoListRender, contentItemDuoRender } from "./render";

const meta: Meta = {
  title: "Components/List/ContentItemDuo",
};

export default meta;

const defaultArgs = {
  isVertical: false,
  label: "Libellé",
  value: "Réponse",
  isShowingDoneIcon: true,
  isShowingCloseIcon: false,
  buttonText: "En savoir plus",
  classModifier: [],
};

const verticalArgs = {
  isVertical: true,
  label:
    "Le choc de véhicules terrestres à moteur, (voiture, trottinette à moteur…) ou la chute d’appareils aériens (avions, hélicoptères…) avec un propriétaire du véhicule adverse identifié ?",
  value: "Les incendies, explosions, implosions, fumée et foudre",
  isShowingDoneIcon: true,
  isShowingCloseIcon: false,
  buttonText: "En savoir plus",
  classModifier: [],
};

export const Default: StoryObj = {
  render: contentItemDuoRender,
  args: defaultArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const Vertical: StoryObj = {
  render: contentItemDuoRender,
  args: verticalArgs,
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const DefaultContentItemDuoList: StoryObj = {
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(defaultArgs),
    isItemsLarge: false,
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};

export const VerticalContentItemDuoList: StoryObj = {
  render: contentItemDuoListRender,
  args: {
    items: Array(3).fill(verticalArgs),
    classModifier: [],
  },
  argTypes: {
    classModifier: {
      options: ["large"],
      control: { type: "multi-select" },
      defaultValue: [],
    },
  },
};
