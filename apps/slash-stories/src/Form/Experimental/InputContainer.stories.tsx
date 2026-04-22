import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Atoms/InputContainer",
  component: InputContainer,
  argTypes: {
    vertical: { control: "boolean" },
  },
});

export const HorizontalStory = meta.story({
  name: "Horizontal Layout",
  render: (args) => (
    <InputContainer {...args}>
      <Label htmlFor="input-1">Label</Label>
      <Input id="input-1" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>
  ),
  args: {
    vertical: false,
  },
});

export const VerticalStory = meta.story({
  name: "Vertical Layout",
  render: (args) => (
    <InputContainer {...args}>
      <Label htmlFor="input-2">Label</Label>
      <Input id="input-2" placeholder="Enter text" />
      <InputUnit>€</InputUnit>
    </InputContainer>
  ),
  args: {
    vertical: true,
  },
});

export const WithoutUnitStory = meta.story({
  name: "Without Unit",
  render: (args) => (
    <InputContainer {...args}>
      <Label htmlFor="input-3">Label</Label>
      <Input id="input-3" placeholder="Enter text" />
    </InputContainer>
  ),
  args: {
    vertical: false,
  },
});
