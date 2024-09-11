import { Meta, StoryObj } from "@storybook/react";

import { Pass } from "./Pass";

export default {
  title: "Components/Form/Input/Pass",
  component: Pass,
} as Meta;

export const PassStory: StoryObj<typeof Pass> = {
  render: (args) => <Pass {...args} />,
  name: "Pass",
  args: {
    classModifier: "bad",
    name: "password",
    id: "uniqueid",
    type: "password",
    value: "",
    readOnly: false,
    disabled: false,
    className: "",
    autoFocus: true,
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
};
