import { Meta, StoryObj } from "@storybook/react";
import { Date as DateComponent } from "./Date";

const MODIFIERS = ["", "required", "disabled"];

const commonProps = {
  name: "birthDate",
  id: "uniqueid",
  value: new Date("01/01/2024"),
};

const meta: Meta<typeof DateComponent> = {
  component: DateComponent,
  title: "Slash/Components/Form/Input/Date",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof DateComponent>,
  "classModifier"
> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const DateStory: Story = {
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
};
