import { RadioItem } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Radio/RadioItem",
  component: RadioItem,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
  },
});

export default meta;

export const DefaultStory = meta.story({
  name: "Default",
  render: (args) => <RadioItem {...args} />,
  args: {
    id: "radio1",
    name: "example",
    value: "option1",
  },
});

export const States = meta.story({
  name: "States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <RadioItem id="radio1" name="example" value="option1" />
      <RadioItem id="radio2" name="example" value="option2" checked />
      <RadioItem id="radio3" name="example" value="option3" disabled />
      <RadioItem id="radio4" name="example" value="option4" aria-invalid />
    </div>
  ),
});
