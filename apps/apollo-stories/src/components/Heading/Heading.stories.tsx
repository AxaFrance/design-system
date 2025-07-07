import { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, HeadingLevel } from "@axa-fr/design-system-apollo-react";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";

import "./Heading.story.scss";
import { renderAllHeading } from "./render";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Components/Heading",
  args: {
    children: "Titre de la page",
  },
  argTypes: {
    className: {
      type: "string",
    },
    iconProps: {
      control: "object",
    },
    tagProps: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;
export const Playground: Story = {
  render: (args) => <Heading {...args} />,
  args: {
    firstSubtitle: "Sous Titre 1",
    secondSubtitle: "Sous Titre 2",
    tag: "Texte",
    icon: bank,
  },
  argTypes: {
    level: {
      options: [1, 2, 3] as HeadingLevel[],
      control: "inline-radio",
    },
  },
};

export const All: Story = {
  args: {
    ...Playground.args,
  },
  render: renderAllHeading,
};
