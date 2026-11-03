import { CheckboxItem } from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";
import { checkboxStates } from "./_checkboxOptions";

const meta = preview.meta({
  title: "Experimental/Form/Checkbox/CheckboxItem",
  component: CheckboxItem,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
  },
  args: {
    id: "checkbox-item",
    name: "example",
    value: "option1",
    "aria-label": "Option 1",
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
      {checkboxStates.map(({ label, ...option }) => (
        <CheckboxItem
          key={option.value}
          {...option}
          id={`checkbox-item-${option.value}`}
          name="item-states"
          aria-label={label}
          onChange={onChange}
        />
      ))}
    </div>
  ),
});
