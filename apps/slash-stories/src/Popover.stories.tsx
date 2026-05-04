import { Popover } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/Popover",
  component: Popover,
  args: {},
  parameters: {
    layout: "centered",
  },
});
export default meta;

export const Default = meta.story({
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
});
