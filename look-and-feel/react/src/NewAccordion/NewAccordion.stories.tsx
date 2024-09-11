import "@axa-fr/design-system-look-and-feel-css/dist/NewAccordion/NewAccordion.scss";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { NewAccordion } from ".";
import { Card, Svg } from "..";

const meta: Meta<typeof NewAccordion> = {
  component: NewAccordion,
  title: "Components/NewAccordion",
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

export const NewAccordionStory: StoryObj<ComponentProps<typeof NewAccordion>> =
  {
    name: "NewAccordion",
    render: (args) => <NewAccordion {...args} />,
    args: defaultArgs,
    argTypes: {
      date: { control: "text" },
    },
  };

export const NewAccordionWithCustomSummaryStory: StoryObj<
  ComponentProps<typeof NewAccordion>
> = {
  name: "NewAccordion With Custom Summary",
  render: (args) => (
    <>
      <style>
        {`
        .af-new-accordion--custom .af-new-accordion__summary {
          grid-template-areas: "title-container arrow";
          grid-template-columns: 1fr auto;

          
          .af-new-accordion__title-container {
            display: block;
          }
        }
        `}
      </style>
      <NewAccordion {...args} />
    </>
  ),
  args: {
    title: (
      <div
        style={{
          backgroundColor: "red",
          paddingBottom: "32px",
        }}
      />
    ),
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
    isOpen: undefined,
    onClick: undefined,
    classModifier: "custom",
  },
  argTypes: {
    date: { control: "text" },
  },
};

export const NewAccordionWithCardStory: StoryObj<
  ComponentProps<typeof NewAccordion>
> = {
  name: "NewAccordion With Card",
  render: (args) => (
    <Card classModifier="large new-accordion" tabIndex={undefined}>
      <NewAccordion {...args} />
    </Card>
  ),
  args: defaultArgs,
  argTypes: {
    date: { control: "text" },
  },
};
