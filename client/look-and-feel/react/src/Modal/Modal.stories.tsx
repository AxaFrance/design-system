import type { Meta, StoryObj } from "@storybook/react";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import { fn } from "@storybook/test";
import { ComponentPropsWithRef, useRef } from "react";
import { Modal } from "./Modal";
import { ButtonClient } from "../Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onSubmit: fn(),
    onCancel: fn(),
  },
};
export default meta;

type TDefaultModalStory = StoryObj<ComponentPropsWithRef<typeof Modal>>;

export const DefaultModalStory: TDefaultModalStory = {
  name: "Modal",
  render: ({ children, ...args }) => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
      <>
        <ButtonClient onClick={() => ref.current?.showModal()}>
          Open the Modal
        </ButtonClient>
        <Modal
          {...args}
          ref={ref}
          onCancel={(e) => {
            args.onCancel(e as React.MouseEvent | React.KeyboardEvent);
            ref.current?.close();
          }}
          onSubmit={(e) => {
            args?.onSubmit?.(e as React.MouseEvent | React.KeyboardEvent);
            // Submit the modal form
          }}
        >
          {children}
        </Modal>
      </>
    );
  },
  args: {
    open: false,
    title: "Modal title",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",
    cancelTitle: "Cancel",
    submitTitle: "Submit",
    subtitle: "Modal subtitle",
    iconTitle: home,
  },
};
