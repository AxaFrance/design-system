import { ItemLabel } from "@axa-fr/canopee-react/client";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemLabel> = {
  title: "Components/Form/ItemLabel",
  component: ItemLabel,
  argTypes: {
    children: { control: "text" },
    description: { control: "text" },
    sideButtonLabel: { control: "text" },
    moreButtonLabel: { control: "text" },
    onSideButtonClick: {
      action: "clicked on side button",
      table: { disable: true },
    },
    onMoreButtonClick: {
      action: "clicked on more button",
      table: { disable: true },
    },
    required: { control: "boolean" },
    label: { table: { disable: true } },
    inputId: { table: { disable: true } },
    buttonLabel: { table: { disable: true } },
    onButtonClick: { table: { disable: true } },
    sideButtonProps: { table: { disable: true } },
    moreButtonProps: { table: { disable: true } },
  },
};
export default meta;

export const Playground: StoryObj<typeof ItemLabel> = {
  args: {
    children: "Label Text",
    description: "Description Text",
    required: false,
    sideButtonLabel: "Side Button",
    moreButtonLabel: "More Label",
  },
};
