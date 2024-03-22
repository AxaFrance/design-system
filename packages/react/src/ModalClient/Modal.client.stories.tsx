import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { ButtonAction, Modal } from "./Modal.client";
import { Icon } from "../Icons/Icons.client";

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
    iconTitle: <Icon name="bluetooth_audio" />,
    fullWidthButtons: false,
    actions: {
      primary: { text: "Save", callback: () => true },
      secondary: { text: "Cancel", callback: () => true },
      tertiary: { text: "Reset", callback: () => true },
    },
  },
};
