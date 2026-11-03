import {
  CheckboxInput,
  type CheckboxInputProps,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";

const options = [
  { name: "transport", value: "train", label: "Train", onChange: fn() },
  { name: "transport", value: "bike", label: "Bike", onChange: fn() },
  { name: "transport", value: "car", label: "Car", onChange: fn() },
];

const cardOptions = [
  { ...options[0], action: "Recommended for long trips" },
  { ...options[1], action: "For short trips" },
  options[2],
];

const stateOptions = [
  { ...options[0], label: "Default" },
  { ...options[1], label: "Selected", defaultChecked: true },
  { ...options[2], label: "Disabled", disabled: true },
  {
    name: "transport",
    value: "disabled-selected",
    label: "Selected disabled",
    disabled: true,
    defaultChecked: true,
  },
];

const renderVariants = (args: CheckboxInputProps) => (
  <>
    {(["button", "text", "card"] as const).map((variant) => (
      <CheckboxInput
        key={variant}
        {...args}
        variant={variant}
        label={variant}
      />
    ))}
  </>
);

const meta = preview.type<{ args: CheckboxInputProps }>().meta({
  title: "Experimental/Form/Checkbox/CheckboxInput",
  component: CheckboxInput,
  argTypes: {
    variant: {
      options: ["button", "text", "card"],
      control: { type: "inline-radio" },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "inline-radio" },
    },
    labelPosition: {
      options: ["centerLeft", "topLeft", "above"],
      control: { type: "inline-radio" },
    },
    options: { table: { disable: true } },
  },
  args: {
    label: "Transport",
    helpMessage: "Choose one or more options",
    options,
  },
});

export default meta;

export const DefaultStory = meta.story({
  name: "Playground",
});

export const TextStory = meta.story({
  name: "Text variant",
  args: { variant: "text", orientation: "vertical" },
});

export const CardStory = meta.story({
  name: "Card variant",
  args: {
    variant: "card",
    options: cardOptions,
  },
});

export const VerticalCardsStory = meta.story({
  name: "Stacked cards",
  args: {
    variant: "card",
    options: cardOptions,
    orientation: "vertical",
  },
});

export const ErrorStory = meta.story({
  name: "Error",
  args: {
    required: true,
    errorMessage: "Select at least one option",
  },
});

export const StatesStory = meta.story({
  name: "States",
  render: renderVariants,
  args: { options: stateOptions },
});

export const ErrorStatesStory = meta.story({
  name: "Error states",
  render: renderVariants,
  args: {
    options: stateOptions,
    errorMessage: "Select at least one option",
  },
});
