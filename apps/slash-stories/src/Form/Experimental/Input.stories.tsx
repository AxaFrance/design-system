import { Input } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Atoms/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    onChange: { action: "changed", table: { disable: true } },
  },
});

export const DefaultStory = meta.story({
  name: "Default",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Enter text...",
  },
});

export const DisabledStory = meta.story({
  name: "Disabled",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this",
  },
});

export const RequiredStory = meta.story({
  name: "Required",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Required field",
    required: true,
  },
});

export const InvalidStory = meta.story({
  name: "Invalid",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
    value: "Invalid value",
  },
});
