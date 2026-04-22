import { InputUnit } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Atoms/InputUnit",
  component: InputUnit,
  argTypes: {
    children: { control: "text" },
  },
});

export const DefaultStory = meta.story({
  name: "Default",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "€",
  },
});
export default meta;

export const PercentageStory = meta.story({
  name: "Percentage",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "%",
  },
});

export const TextUnitStory = meta.story({
  name: "Text Unit",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "per month",
  },
});
