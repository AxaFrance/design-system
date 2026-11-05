import { Svg } from "@axa-fr/canopee-react/distributeur";
import { CheckboxCard } from "@axa-fr/canopee-react/distributeur/experimental";
import home from "@material-symbols/svg-400/outlined/home.svg";
import { fn } from "storybook/test";
import preview from "../../../../.storybook/preview";
import { checkboxStates } from "./_checkboxOptions";

const meta = preview.meta({
  title: "Experimental/Form/Checkbox/CheckboxCard",
  component: CheckboxCard,
  argTypes: {
    "aria-invalid": { control: "boolean", name: "aria-invalid" },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
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

export const WithIconStory = meta.story({
  name: "With Icon",
  args: { icon: <Svg src={home} className="af-basecard__icon" /> },
});

export const WithActionStory = meta.story({
  name: "With Action",
  args: { action: "Additional information about this option" },
});

export const VerticalStory = meta.story({
  name: "Vertical",
  args: {
    orientation: "vertical",
    icon: <Svg src={home} className="af-basecard__icon" />,
    action: "Additional information about this option",
  },
});

export const States = meta.story({
  name: "States",
  render: ({ onChange, orientation }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      {checkboxStates.map((option) => (
        <CheckboxCard
          key={option.value}
          {...option}
          id={`checkbox-card-${option.value}`}
          name="card-states"
          icon={<Svg src={home} className="af-basecard__icon" />}
          orientation={orientation}
          onChange={onChange}
        />
      ))}
    </div>
  ),
});
