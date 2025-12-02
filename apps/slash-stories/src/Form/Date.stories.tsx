import { Date as DateComponent } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const MODIFIERS = ["", "required", "disabled"];

const commonProps = {
  name: "birthDate",
  id: "uniqueid",
  value: new Date("01/01/2024"),
};

const meta: Meta<typeof DateComponent> = {
  component: DateComponent,
  title: "Components/Form/Input/Date",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
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
