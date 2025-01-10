import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";
import bluetoothAudio from "@material-symbols/svg-400/outlined/bluetooth_searching.svg";
import { fn } from "@storybook/test";
import { Modal } from ".";
import { Svg } from "../Svg";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*|^callback*" },
  },
};
export default meta;

type StoryProps = ComponentProps<typeof Modal>;
type Story = StoryObj<StoryProps>;

const Container = (props: ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        open modal
      </button>
      <Modal {...props} open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export const Playground: Story = {
  name: "Modal",
  render: (args) => <Container {...args} />,
  args: {
    hasCloseButton: true,
    title: "Modal title",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    iconTitle: <Svg src={bluetoothAudio} />,
    subtitle: "Info complémentaire",
    fullWidthButtons: false,
    onClose: fn(),
    onClickOutside: fn(),
    actions: {
      primary: {
        text: "Save",
        callback: fn(),
      },
      secondary: {
        text: "Cancel",
        callback: fn(),
      },
      tertiary: {
        text: "Reset",
        callback: fn(),
        disabled: true,
      },
    },
  },
};
