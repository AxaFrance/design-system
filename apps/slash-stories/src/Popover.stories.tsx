import { Popover } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  args: {},
  parameters: {
    layout: "centered",
  },
};
export default meta;

export const Default: StoryObj<typeof Popover> = {
  name: "Popover",
  render: ({ ...args }) => (
    <Popover
      {...args}
      popoverElement={
        <>
          <h1>Content of the popover</h1>
          <p>Text of the modal element</p>
        </>
      }
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "auto",
          backgroundColor: "green",
          alignContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        Example
      </div>
    </Popover>
  ),
  args: {
    mode: "hover",
  },
  argTypes: {
    placement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
      ],
      control: { type: "select" },
    },
  },
};
