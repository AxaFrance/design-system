import { Date as DateComponent } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/Date",
  component: DateComponent,
  argTypes: { onChange: { action: "onChange" } },
  args: {
    onChange: fn(),
    name: "birthDate",
    id: "uniqueid",
    value: new Date("01/01/2024"),
  },
});
export default meta;

export const DateStory = meta.story({
  name: "Date",
  tags: ["Form", "Input"],
});
