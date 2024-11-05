import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
import { PropsWithChildren, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./type";
import { Modal } from "./Modal";
import { useModal } from "./Modal.hook";

export const ModalContainer = ({
  isOpen,
  setIsOpen,
  hasCloseBtn = true,
  onClose,
  onClickOutside,
  children,
  title,
  subtitle,
  iconTitle,
  actions,
  fullWidthButtons,
}: PropsWithChildren<ModalProps>) => {
  const { handleClickOutside, handleKeyDown, handleCloseModal } = useModal({
    setIsOpen,
    onClose,
    onClickOutside,
  });
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const idTitle = useId();
  const idContent = useId();

  const actionCallback = (callback?: () => void) => {
    callback?.();
    setIsOpen(false);
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        modalElement.showModal?.();
      } else {
        document.body.style.overflow = "inherit";
        modalElement.close?.();
      }
    }
    return () => {
      document.body.style.overflow = "inherit";
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, handleKeyDown]);

  return createPortal(
    <Modal
      modalRef={modalRef}
      idTitle={idTitle}
      idContent={idContent}
      iconTitle={iconTitle}
      title={title}
      subtitle={subtitle}
      hasCloseBtn={hasCloseBtn}
      handleCloseModal={handleCloseModal}
      actionCallback={actionCallback}
      actions={actions}
      fullWidthButtons={fullWidthButtons}
    >
      {children}
    </Modal>,
    document.body,
  );
};
