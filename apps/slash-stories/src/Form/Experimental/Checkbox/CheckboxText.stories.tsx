import { CheckboxText } from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";
import { checkboxStates } from "./_checkboxOptions";

const meta = preview.meta({
  title: "Experimental/Form/Checkbox/CheckboxText",
  component: CheckboxText,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
  },
  args: {
    id: "checkbox-text",
    name: "example",
    value: "option1",
    label: "Option 1",
    onChange: fn(),
  },
});

export default meta;

export const DefaultStory = meta.story({
  name: "Default",
});

export const States = meta.story({
  name: "States",
  render: ({ onChange }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {checkboxStates.map((option) => (
        <CheckboxText
          key={option.value}
          {...option}
          id={`checkbox-text-${option.value}`}
          name="text-states"
          onChange={onChange}
        />
      ))}
    </div>
  ),
});
