import { Pass } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/Pass",
  component: Pass,
  args: {
    classModifier: "bad",
    name: "password",
    id: "id1",
    type: "password",
    value: "",
    readOnly: false,
    disabled: false,
    className: "",
    autoFocus: true,
    onChange: fn(),
    onToggleType: fn(),
  },
  argTypes: {
    onChange: { action: "onChange" },
    onToggleType: { action: "onToggleType" },
    classModifier: {
      options: ["bad", "okay", "good", "verygood", "excellent"],
      control: {
        type: "select",
      },
      defaultValue: "bad",
    },
  },
});

export const PassStory = meta.story({
  render: (args) => <Pass {...args} />,
  name: "Pass",
  args: {
    onChange: fn(),
    onToggleType: fn(),
  },
});
