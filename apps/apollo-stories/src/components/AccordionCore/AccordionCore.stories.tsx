import { AccordionCore } from "@axa-fr/design-system-apollo-react";
import { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const meta: Meta<typeof AccordionCore> = {
  component: AccordionCore,
  title: "Components/AccordionCore",
};

export default meta;

const defaultArgs = {
  summary: "Titre onglet",
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
  onClick: undefined,
};

export const AccordionCoreStory: StoryObj<
  ComponentProps<typeof AccordionCore>
> = {
  name: "AccordionCore",
  render: (args) => <AccordionCore {...args} />,
  args: defaultArgs,
};
