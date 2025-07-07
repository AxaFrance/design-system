import { ItemLabel } from "@axa-fr/design-system-look-and-feel-react";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof ItemLabel> = {
  title: "Components/Form/ItemLabel",
  component: ItemLabel,
  argTypes: {
    onSideButtonClick: { action: "clicked on side button" },
    onButtonClick: { action: "clicked on button" },
    required: { control: "boolean" },
  },
};
export default meta;

export const Default: StoryObj<typeof ItemLabel> = {
  args: {
    label: "Label Text",
    description: "Description Text",
    required: false,
    inputId: "input-id",
    idLabel: "label-id",
    sideButtonLabel: "Side Button",
    buttonLabel: "ButtonLabel",
  },
};
