import article from "@material-symbols/svg-400/outlined/article-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { Title } from ".";
import { Svg } from "../../Svg";
import { TitleSize } from "./constants";

const meta: Meta<typeof Title> = {
  title: "Client/Components/Title",
  component: Title,
};

export default meta;

export const TitleWithIcon: StoryObj<typeof Title> = {
  name: "Title With Icon",
  render: (args) => <Title {...args} />,
  args: {
    children: "Titre de la page",
    firstSubtitle: "Sous-titre 1",
    secondSubtitle: "Sous-titre 2",
    icon: <Svg src={article} />,
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
  name: "Title Without Icon",
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
