import { BaseCard } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/BaseCard",
  component: BaseCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    component: {
      options: ["button", "label"],
      control: { type: "select" },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    type: {
      options: ["button", "submit"],
      control: { type: "select" },
    },
  },
});
export default meta;

export const Default = meta.story({
  name: "BaseCard Button",
  args: {
    children: "Base Card Content",
    component: "button",
    orientation: "horizontal",
    disabled: false,
    type: "button",
  },
});

export const AsLabel = meta.story({
  name: "BaseCard Label",
  args: {
    children: "Base Card Label",
    component: "label",
    orientation: "horizontal",
    htmlFor: "example",
  },
});

export const VerticalButton = meta.story({
  name: "BaseCard Button Vertical",
  args: {
    ...Default.input.args,
    orientation: "vertical",
  },
});

export const VerticalLabel = meta.story({
  name: "BaseCard Label Vertical",
  args: {
    ...AsLabel.input.args,
    orientation: "vertical",
  },
});

export const Disabled = meta.story({
  name: "BaseCard Button Disabled",
  args: {
    ...Default.input.args,
    disabled: true,
  },
});

export const Submit = meta.story({
  name: "BaseCard Submit",
  args: {
    ...Default.input.args,
    type: "submit",
    children: "Submit",
  },
});
