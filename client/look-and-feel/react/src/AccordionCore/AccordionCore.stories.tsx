import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import { AccordionCore } from ".";
import { Card } from "..";

const meta: Meta<typeof AccordionCore> = {
  component: AccordionCore,
  title: "Components/AccordionCore",
};

export default meta;

const defaultArgs = {
  summary: "Titre onglet",
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
  isOpen: undefined,
  onClick: undefined,
};

export const AccordionCoreStory: StoryObj<
  ComponentProps<typeof AccordionCore>
> = {
  name: "AccordionCore",
  render: (args) => <AccordionCore {...args} />,
  args: defaultArgs,
};

export const AccordionCoreWithCustomStyledSummaryStory: StoryObj<
  ComponentProps<typeof AccordionCore>
> = {
  name: "AccordionCore With Custom Styled Summary",
  render: (args) => <AccordionCore {...args} />,
  args: {
    summary: (
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
  },
};

export const AccordionCoreWithCardStory: StoryObj<
  ComponentProps<typeof AccordionCore>
> = {
  name: "AccordionCore With Card",
  render: (args) => (
    <Card classModifier="large accordion">
      <AccordionCore {...args} />
    </Card>
  ),
  args: defaultArgs,
};
