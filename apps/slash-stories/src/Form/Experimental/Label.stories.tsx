import { Label } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Atoms/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
    required: { control: "boolean" },
  },
});

export default meta;

export const DefaultStory = meta.story({
  name: "Default",
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Label text",
    htmlFor: "input-id",
  },
});

export const RequiredStory = meta.story({
  name: "Required",
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Required field",
    htmlFor: "input-id",
    required: true,
  },
});
