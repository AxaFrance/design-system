import { Select } from "@axa-fr/canopee-react/distributeur";
import { ComponentProps } from "react";
import preview from "../../.storybook/preview";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];
type StoryProps = ComponentProps<typeof Select>;

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Select",
  argTypes: { onChange: { action: "onChange" } },
});

export const SelectStory = meta.story({
  name: "Select",
  tags: ["Form", "Input"],
  render: ({ onChange, ...args }: ComponentProps<typeof Select>) => (
    <Select onChange={onChange} {...args} />
  ),
  args: {
    mode: "default",
    className: "",
    options,
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["default", "base"],
      },
    },
  },
});

export const SelectStoryWithChildren = meta.story({
  ...SelectStory.input,
  name: "Select With Children",
  render: ({ onChange, ...args }: ComponentProps<typeof Select>) => (
    <Select onChange={onChange} {...args}>
      <optgroup label="Groupe 1">
        <option>Option 1</option>
        <option>Option 2</option>
      </optgroup>
      <optgroup label="Groupe 2">
        <option>Option 3</option>
        <option>Option 4</option>
      </optgroup>
    </Select>
  ),
  args: {
    mode: "default",
    className: "",
    placeholder: "- Select -",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
  },
});
