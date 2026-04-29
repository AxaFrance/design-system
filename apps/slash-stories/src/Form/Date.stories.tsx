import { Date as DateComponent } from "@axa-fr/canopee-react/distributeur";
import { fn } from "storybook/test";
import preview from "../../.storybook/preview";

const MODIFIERS = ["", "required", "disabled"];

const commonProps = {
  name: "birthDate",
  id: "uniqueid",
  value: new Date("01/01/2024"),
};

const meta = preview.type<{ args: StoryProps }>().meta({
  title: "Components/Form/Input/Date",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
});

type StoryProps = Omit<
  React.ComponentProps<typeof DateComponent>,
  "classModifier"
> & {
  classModifier: string[];
};

export const DateStory = meta.story({
  name: "Date",
  tags: ["Form", "Input"],
  render: ({ classModifier, onChange, ...args }) => (
    <DateComponent
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    ...commonProps,
    classModifier: [] as string[],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
    },
  },
});
