import { Accordion, Svg } from "@axa-fr/design-system-apollo-react";
import callIcon from "@material-symbols/svg-400/outlined/call-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Components/Accordion",
};

export default meta;

const defaultArgs = {
  isTitleFirst: true,
  icon: <Svg src={callIcon} />,
  title: "Titre onglet",
  subtitle: "Titre onglet",
  tagLabel: "En attente",
  dateLabel: "01/01/2021",
  dateProps: { dateTime: "2021-01-01" },
  value: "+ 686,00 €",
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper magna et tempor blandit. 
              Nulla vitae eros a odio pretium gravida. Sed eget tortor nec massa lobortis bibendum. Morbi eget 
              ligula porttitor, euismod odio vestibulum, porta massa. Aenean vel venenatis tellus, sed iaculis nisl.`,
  isOpen: undefined,
  onClick: undefined,
};

export const AccordionStory: StoryObj<ComponentProps<typeof Accordion>> = {
  name: "Accordion",
  render: (args) => <Accordion {...args} />,
  args: defaultArgs,
  argTypes: {
    dateLabel: { control: "text" },
  },
};

// export const AccordionWithCardStory: StoryObj<
//   ComponentProps<typeof Accordion>
// > = {
//   name: "Accordion With Card",
//   render: (args) => (
//     <Card classModifier="large accordion">
//       <Accordion {...args} />
//     </Card>
//   ),
//   args: defaultArgs,
//   argTypes: {
//     dateLabel: { control: "text" },
//   },
// };
