import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import bluetoothAudio from "@material-design-icons/svg/outlined/bluetooth_audio.svg";
import { ButtonAction, Modal } from "./Modal.client";
import { Svg } from "../Svg";

const meta: Meta<typeof Modal> = {
  title: "Client/Components/Modal",
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

export const Playground: Story = {
  name: "Modal",
  render: ({ children, ...args }) => <Modal {...args}>{children}</Modal>,
  args: {
    isOpen: true,
    hasCloseBtn: true,
    onClose: () => true,
    title: "Modal title",
    children:
      "Vestibulum nunc neque, sodales non luctus in, dictum vitae nisl. Curabitur vitae massa non nisl lacinia tempus. Pellentesque id nulla tortor.",
    iconTitle: <Svg src={bluetoothAudio} />,
    fullWidthButtons: false,
    actions: {
      primary: { text: "Save", callback: () => true },
      secondary: { text: "Cancel", callback: () => true },
      tertiary: { text: "Reset", callback: () => true },
    },
  },
};
