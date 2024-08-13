import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, ReactNode, useState } from "react";
import bluetoothAudio from "@material-symbols/svg-400/outlined/bluetooth_searching.svg";
import { ButtonAction, Modal } from "./Modal.client";
import { Svg } from "../Svg";

const meta: Meta<typeof Modal> = {
  title: "Look-and-feel/Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Modal>,
  | "isOpen"
  | "hasCloseBtn"
  | "onClose"
  | "title"
  | "iconTitle"
  | "fullWidthButtons"
  | "actions"
> & {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  title: string;
  iconTitle?: ReactNode;
  fullWidthButtons?: boolean;
  actions?: {
    primary?: ButtonAction;
    secondary?: ButtonAction;
    tertiary?: ButtonAction;
  };
};
type Story = StoryObj<StoryProps>;

const Container = (props: ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        open modal
      </button>
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        actions={{
          primary: { text: "Save", callback: () => setIsOpen(false) },
          secondary: { text: "Cancel", callback: () => setIsOpen(false) },
          tertiary: { text: "Reset", callback: () => setIsOpen(false) },
        }}
      />
    </>
  );
};

export const Playground: Story = {
  name: "Modal",
  render: (args) => <Container {...args} />,
  args: {
    hasCloseBtn: true,
    title: "Modal title",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    iconTitle: <Svg src={bluetoothAudio} />,
    subtitle: "Info complémentaire",
    fullWidthButtons: false,
  },
};
