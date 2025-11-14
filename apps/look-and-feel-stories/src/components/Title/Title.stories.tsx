import {
  Svg,
  Title,
  TitleSize,
} from "@axa-fr/design-system-look-and-feel-react";
import article from "@material-symbols/svg-400/outlined/article-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
};

export default meta;

export const TitleBasic: StoryObj<typeof Title> = {
  render: (args) => <Title {...args} />,
  args: {
    children: "Titre de la page",
    size: TitleSize.XL,
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: { type: "select" },
      defaultValue: TitleSize.XL,
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: "select" },
      defaultValue: 1,
    },
  },
};

export const TitleWithIcon: StoryObj<typeof Title> = {
  render: (args) => <Title {...args} />,
  args: {
    children: "Titre de la page",
    firstSubtitle: "Sous-titre 1",
    secondSubtitle: "Sous-titre 2",
    icon: <Svg src={article} aria-hidden />,
    size: TitleSize.XL,
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: { type: "select" },
      defaultValue: TitleSize.XL,
    },
  },
};

export const TitleWithoutIcon: StoryObj<typeof Title> = {
  render: (args) => <Title {...args} />,
  args: {
    children: "Titre de la page",
    firstSubtitle: "Sous-titre 1",
    secondSubtitle: "Sous-titre 2",
    size: TitleSize.XL,
  },
  argTypes: {
    size: {
      options: Object.values(TitleSize),
      control: { type: "select" },
      defaultValue: TitleSize.XL,
    },
  },
};
