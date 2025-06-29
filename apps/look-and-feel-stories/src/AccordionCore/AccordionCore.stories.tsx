import { AccordionCore } from "@axa-fr/design-system-apollo-react/lf";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

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
