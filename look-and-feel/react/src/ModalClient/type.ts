import { ReactNode, RefObject } from "react";

export type ButtonAction = {
  text: string;
  disabled?: boolean;
  callback: () => void;
};

export type TActionButton = {
  primary?: ButtonAction;
  secondary?: ButtonAction;
  tertiary?: ButtonAction;
};

export type TModalHook = {
  setIsOpen: (value: boolean) => void;
  onClose?: () => void;
  onClickOutside?: () => void;
};

export type ModalProps = TModalHook & {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  title: string;
  subtitle?: string;
  iconTitle?: ReactNode;
  fullWidthButtons?: boolean;
  actions?: TActionButton;
};

export type TModalType = {
  modalRef: RefObject<HTMLDialogElement>;
  idTitle: string;
  idContent: string;
  iconTitle: ReactNode;
  title: string;
  subtitle?: string;
  hasCloseBtn: boolean;
  handleCloseModal: () => void;
  actionCallback: (callback?: () => void) => void;
  actions?: TActionButton;
  fullWidthButtons?: boolean;
};
