import { RadioItem } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/Radio",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
  component: RadioItem,
});
export default meta;

export const RadioItemStory = meta.story({
  name: "RadioItem",
  args: {
    label: "Paris",
    value: "",
    isChecked: false,
    required: false,
    readOnly: false,
    disabled: false,
    name: "placeName",
    id: "where-are-you",
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
});
