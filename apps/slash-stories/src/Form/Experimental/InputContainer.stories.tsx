import {
  Input,
  InputContainer,
  InputUnit,
  Label,
} from "@axa-fr/canopee-react/distributeur/experimental";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Experimental/Form/Atoms/InputContainer",
  component: InputContainer,
  argTypes: {
    vertical: { control: "boolean" },
  },
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof InputContainer>;

export const HorizontalStory: Story = {
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
};

export const VerticalStory: Story = {
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
};

export const WithoutUnitStory: Story = {
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
};
