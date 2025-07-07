import "./Modal.story.scss";

import { Button, Modal } from "@axa-fr/design-system-apollo-react";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ComponentPropsWithRef, useLayoutEffect, useRef } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    viewport: { defaultViewport: "desktop" },
  },
  args: {
    onClose: fn(),
    onCancel: fn(),
  },
};
export default meta;

type ModalStory = StoryObj<ComponentPropsWithRef<typeof Modal>>;

export const ModalContent: ModalStory = {
  name: "Modal",
  decorators: [
    (Story, { args: { open, ...args } }) => {
      const modalRef = useRef<HTMLDialogElement>(null);

      useLayoutEffect(() => {
        if (open) {
          modalRef.current?.showModal();
          return;
        }

        modalRef.current?.close();
      }, [open]);

      return <Story args={{ ...args, ref: modalRef }} />;
    },
  ],
  args: {
    open: true,
    title: "Modal title",
    headingProps: {
      firstSubtitle: "Modal subtitle",
    },
    icon: bank,
    iconProps: { variant: "primary" },
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris",
    secondaryButtonProps: {
      children: "Cancel",
      onClick: action("[Cancel] onClick"),
    },
    primaryButtonProps: {
      children: "Submit",
      onClick: action("[Submit] onClick"),
    },
  },
};

export const Playground: ModalStory = {
  decorators: [
    (Story, { args: { secondaryButtonProps = {}, ...args } }) => {
      const ref = useRef<HTMLDialogElement>(null);

      const onClose = () => {
        args.onClose?.();
        ref.current?.close();
      };

      const onClickSecondaryButton: React.MouseEventHandler<
        HTMLButtonElement
      > = (e) => {
        secondaryButtonProps.onClick?.(e);
        ref.current?.close();
      };

      return (
        <>
          <div className="button-wrapper">
            <Button onClick={() => ref.current?.showModal()}>
              Open the Modal
            </Button>
          </div>
          <Story
            args={{
              ...args,
              ref,
              onClose,
              secondaryButtonProps: {
                ...secondaryButtonProps,
                onClick: onClickSecondaryButton,
              },
            }}
          />
        </>
      );
    },
  ],
  args: { ...ModalContent.args, open: undefined },
};

export const MobilePlayground: ModalStory = {
  ...Playground,
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
