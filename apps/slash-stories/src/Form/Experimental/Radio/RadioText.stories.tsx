import { RadioText } from "@axa-fr/canopee-react/distributeur/experimental";
import preview from "../../../../.storybook/preview";

const meta = preview.meta({
  title: "Experimental/Form/Radio/RadioText",
  component: RadioText,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
  },
});

export default meta;

export const DefaultStory = meta.story({
  name: "Default",
  render: (args) => <RadioText {...args} />,
  args: {
    id: "radio1",
    name: "example",
    value: "option1",
    label: "Option 1",
  },
});

export const States = meta.story({
  name: "States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <RadioText id="radio1" name="example" value="option1" label="Option 1" />
      <RadioText
        id="radio2"
        name="example"
        value="option2"
        label="Option 2"
        checked
      />
      <RadioText
        id="radio3"
        name="example"
        value="option3"
        label="Option 3"
        disabled
      />
      <RadioText
        id="radio4"
        name="example"
        value="option4"
        label="Option 4"
        aria-invalid
      />
    </div>
  ),
});
