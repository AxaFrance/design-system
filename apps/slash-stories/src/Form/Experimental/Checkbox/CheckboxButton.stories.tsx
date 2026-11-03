import { CheckboxButton } from "@axa-fr/canopee-react/distributeur/experimental";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";
import { checkboxStates } from "./_checkboxOptions";

const meta = preview.meta({
  title: "Experimental/Form/Checkbox/CheckboxButton",
  component: CheckboxButton,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
  },
  args: {
    id: "checkbox-button",
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      {checkboxStates.map((option) => (
        <CheckboxButton
          key={option.value}
          {...option}
          id={`checkbox-button-${option.value}`}
          name="button-states"
          onChange={onChange}
        />
      ))}
    </div>
  ),
});
