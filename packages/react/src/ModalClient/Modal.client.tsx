/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Icon } from "../Icons/Icons.client";
import {
  ButtonClient as Button,
  Variants as ButtonVariants,
} from "../Button/Button.client";
import "@axa-fr/design-system-css/dist/Modal/Modal.client.scss";

export type ButtonAction = {
  text: string;
  callback: () => void;
};

type ModalProps = {
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

export const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
  title,
  iconTitle,
  actions,
  fullWidthButtons,
}: PropsWithChildren<ModalProps>) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const idTitle = useId();
  const idContent = useId();

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalRef.current) {
      return;
    }
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      modalElement!.showModal();
    } else {
      document.body.style.overflow = "scroll";
      modalElement!.close();
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    onClose?.();
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onKeyDown={handleKeyDown}
      onClick={(e) => e.target === modalRef.current && handleCloseModal()}
      className="af-modal"
      aria-labelledby={idTitle}
      aria-describedby={idContent}
    >
      <div id={idTitle} className="af-modal__top">
        {iconTitle}
        <h2 className="af-modal__top-title">
          <div className="af-modal__top-title-text">{title}</div>
          {hasCloseBtn && (
            <Button
              className="af-modal__top-title-close-btn"
              onClick={handleCloseModal}
              type="button"
              aria-label="close"
            >
              <Icon name="close" width={32} height={32} />
            </Button>
          )}
        </h2>
      </div>
      <div id={idContent} className="af-modal__content">
        {children}
      </div>
      {actions && (
        <div
          className={`af-modal__actions${fullWidthButtons ? " af-modal__actions--fullWidth" : ""} `}
        >
          {actions?.primary && (
            <Button
              variant={ButtonVariants.primary}
              onClick={actions?.primary.callback}
            >
              {actions?.primary.text}
            </Button>
          )}
          {actions?.secondary && (
            <Button
              variant={ButtonVariants.secondary}
              onClick={actions?.secondary.callback}
            >
              {actions?.secondary.text}
            </Button>
          )}
          {actions?.tertiary && (
            <Button
              variant={ButtonVariants.tertiary}
              onClick={actions?.tertiary.callback}
            >
              {actions?.tertiary.text}
            </Button>
          )}
        </div>
      )}
    </dialog>
  );
};
