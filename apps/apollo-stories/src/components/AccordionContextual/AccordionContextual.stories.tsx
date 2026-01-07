import { Meta, StoryObj } from "@storybook/react";
import { AccordionContextual } from "@axa-fr/canopee-react/prospect";
import type { ComponentProps } from "react";
import bank from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

const meta: Meta<typeof AccordionContextual> = {
  component: AccordionContextual,
  title: "Components/AccordionContextual",
};

export default meta;

const commonArgs = {
  variant: "info",
  title: "Titre onglet",
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
};

export const AccordionContextualInfoStory: StoryObj<
  ComponentProps<typeof AccordionContextual>
> = {
  name: "Accordion Contextual Info",
  render: (args) => <AccordionContextual {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    variant: "info",
  },
};

export const AccordionContextualWarningStory: StoryObj<
  ComponentProps<typeof AccordionContextual>
> = {
  name: "Accordion Contextual Warning",
  render: (args) => <AccordionContextual {...args} />,
  args: {
    ...commonArgs,
    icon: bank,
    variant: "warning",
  },
};

export const AccordionContextualReverseStory: StoryObj<
  ComponentProps<typeof AccordionContextual>
> = {
  name: "Accordion Contextual Reverse",
  render: (args) => (
    <div
      style={{
        backgroundColor: "var(--axa-blue-100, var(--color-axa-blue))",
        padding: "0.5rem",
      }}
    >
      <AccordionContextual {...args} />
    </div>
  ),
  args: {
    ...commonArgs,
    variant: "reverse",
  },
};
