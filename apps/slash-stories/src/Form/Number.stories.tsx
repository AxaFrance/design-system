import { Number } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const meta = preview.meta({
  title: "Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
  args: {
    onChange: fn(),
    value: 5,
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    "aria-disabled": false,
  },
  component: Number,
});

export default meta;

export const NumberStory = meta.story({
  name: "Number",
  render: ({ onChange, ...args }) => <Number onChange={onChange} {...args} />,
  args: {},
});
