import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { Modes } from "./LoaderModes";

const meta: Meta<typeof Loader> = {
  title: "Agent/Components/Loader",
  component: Loader,

  argTypes: {
    mode: {
      options: Modes,
      control: {
        type: "select",
      },
      defaultValue: Modes.get,
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Loader> = {
  name: "Default",
  args: {
    text: "",
    mode: Modes.get,
    classModifier: "",
    className: "",
    children: (
      <div>
        <h1>Title Child</h1>
        <span>Here your child component</span>
      </div>
    ),
  },
};
