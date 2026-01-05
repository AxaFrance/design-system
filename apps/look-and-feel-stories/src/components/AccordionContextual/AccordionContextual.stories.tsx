import { Meta, StoryObj } from "@storybook/react";
import { AccordionContextual } from "@axa-fr/canopee-react/client";
import { ComponentProps } from "react";
import bank from "@material-symbols/svg-700/rounded/account_balance-fill.svg";
import "./AccordionContextual.story.scss";

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
  render: (args) => (
    <div className="af-apollo-accordion-contextual-info-demo-container">
      <AccordionContextual {...args} />
    </div>
  ),
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
  render: (args) => (
    <div className="af-apollo-accordion-contextual-warning-demo-container">
      <AccordionContextual {...args} />
    </div>
  ),
  args: {
    ...commonArgs,
    icon: bank,
    variant: "warning",
  },
};

export const AccordionContextualInverseStory: StoryObj<
  ComponentProps<typeof AccordionContextual>
> = {
  name: "Accordion Contextual Inverse",
  render: (args) => (
    <div className="af-apollo-accordion-contextual-inverse-demo-container">
      <AccordionContextual {...args} />
    </div>
  ),
  args: {
    ...commonArgs,
    variant: "inverse",
  },
};
