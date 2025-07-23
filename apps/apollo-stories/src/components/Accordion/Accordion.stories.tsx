import {
  Accordion,
  accordionVariants,
  AccordionVariants,
  TagVariants,
} from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";
import bank from "@material-symbols/svg-700/rounded/account_balance-fill.svg";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Components/Accordion",
};

export default meta;

const commonArgs = {
  variant: "primary" as AccordionVariants,
  title: "Titre onglet",
  subtitle: "Sous-titre onglet",
  tagLabel: "En attente",
  tagProps: {
    variant: "warning" as TagVariants,
  },
  info2: "+ 686,00 €",
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        consectetur urna a tellus semper, id elementum ligula fermentum. In
        semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
        purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
        dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at
        nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis
        malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate
        at elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        consectetur urna a tellus semper, id elementum ligula fermentum. In
        semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
        purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
        dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at
        nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis
        malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate
        at elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        consectetur urna a tellus semper, id elementum ligula fermentum. In
        semper quis mi eu commodo. Vivamus in metus eros. Sed ut pellentesque
        purus. Maecenas congue ornare massa quis porttitor. Nullam ut diam
        dapibus, consequat libero eget, faucibus nibh. Etiam imperdiet metus at
        nulla fermentum semper. In ipsum urna, tempus vel lorem vel, venenatis
        malesuada dui. Cras massa ipsum, accumsan et scelerisque ut, vulputate
        at elit.
      </p>
    </>
  ),
  isOpen: undefined,
  onClick: action("Accordion has been clicked"),
};

export const AccordionDefaultStory: StoryObj<ComponentProps<typeof Accordion>> =
  {
    name: "Accordion",
    render: (args) => <Accordion {...args} />,
    args: {
      ...commonArgs,
      icon: bank,
      dateLabel: "01/01/2021",
      dateProps: { dateTime: "2021-01-01" },
      info1: "Lorem ipsum dolor sit amet",
    },
    argTypes: {
      dateLabel: { control: "text" },
      variant: {
        options: Object.values(accordionVariants),
        control: { type: "select" },
        value: accordionVariants.secondary,
      },
    },
  };

export const AccordionPrimaryStory: StoryObj<ComponentProps<typeof Accordion>> =
  {
    name: "Accordion Primary",
    render: (args) => <Accordion {...args} />,
    args: {
      ...commonArgs,
      icon: bank,
      info1: "Lorem ipsum dolor sit amet",
    },
    argTypes: {
      dateLabel: { control: "text" },
      variant: { control: "text" },
    },
  };

export const AccordionSecondaryStory: StoryObj<
  ComponentProps<typeof Accordion>
> = {
  name: "Accordion Secondary",
  render: (args) => <Accordion {...args} />,
  args: {
    ...commonArgs,
    variant: "secondary" as AccordionVariants,
    dateLabel: "01/01/2021",
    dateProps: { dateTime: "2021-01-01" },
  },
  argTypes: {
    dateLabel: { control: "text" },
    variant: { control: "text" },
  },
};
