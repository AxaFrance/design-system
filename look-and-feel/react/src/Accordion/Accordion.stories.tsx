import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { Accordion } from ".";
import { Card, Svg } from "../../client";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Components/Accordion",
};

export default meta;

const defaultArgs = {
  icon: <Svg src={callIcon} />,
  title: "Titre onglet",
  subtitle: "Titre onglet",
  tag: "En attente",
  date: "01/01/2021",
  value: "+ 686,00 €",
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
  isOpen: undefined,
  onClick: undefined,
  isTitleFirst: true,
};

export const AccordionStory: StoryObj<ComponentProps<typeof Accordion>> = {
  name: "Accordion",
  render: (args) => <Accordion {...args} />,
  args: defaultArgs,
  argTypes: {
    date: { control: "text" },
  },
};

export const AccordionWithCardStory: StoryObj<
  ComponentProps<typeof Accordion>
> = {
  name: "Accordion With Card",
  render: (args) => (
    <Card classModifier="large accordion" tabIndex={undefined}>
      <Accordion {...args} />
    </Card>
  ),
  args: defaultArgs,
  argTypes: {
    date: { control: "text" },
  },
};
