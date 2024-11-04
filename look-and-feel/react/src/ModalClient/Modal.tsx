/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import close from "@material-symbols/svg-400/outlined/close.svg";
import {
  ButtonClient as Button,
  Variants as ButtonVariants,
} from "../Button/Button";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
import { Svg } from "../Svg";

export type ButtonAction = {
  text: string;
  disabled?: boolean;
  callback: () => void;
};

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  onClickOutside?: () => void;
  title: string;
  subtitle?: string;
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
  onClickOutside,
  children,
  title,
  subtitle,
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
      document.body.style.overflow = "inherit";
      modalElement!.close();
    }
  }, [isModalOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "inherit";
    };
  }, []);

  const handleCloseModal = () => {
    onClose?.();
    setIsModalOpen(false);
  };

  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
      setIsModalOpen(false);
    } else {
      handleCloseModal();
    }
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
      onClick={(e) => e.target === modalRef.current && handleClickOutside()}
      className="af-modal"
      aria-labelledby={idTitle}
      aria-describedby={idContent}
    >
      <div id={idTitle} className="af-modal__top">
        {iconTitle}
        <h2 className="af-modal__top-title">
          <div>
            <div className="af-modal__top-title-text">{title}</div>
            {subtitle && (
              <span className="af-modal__top-title-subtitle">{subtitle}</span>
            )}
          </div>
          {hasCloseBtn && (
            <Button
              className="af-modal__top-title-close-btn"
              onClick={handleCloseModal}
              type="button"
              aria-label="close"
            >
              <Svg src={close} width={32} height={32} />
            </Button>
          )}
        </h2>
      </div>
      <div id={idContent} className="af-modal__content">
        {children}
        {actions && (
          <div
            className={`af-modal__actions${fullWidthButtons ? " af-modal__actions--fullWidth" : ""} `}
          >
            {actions?.primary && (
              <Button
                variant={ButtonVariants.primary}
                onClick={actions?.primary.callback}
                disabled={actions?.primary.disabled}
              >
                {actions?.primary.text}
              </Button>
            )}
            {actions?.secondary && (
              <Button
                variant={ButtonVariants.secondary}
                onClick={actions?.secondary.callback}
                disabled={actions?.secondary.disabled}
              >
                {actions?.secondary.text}
              </Button>
            )}
            {actions?.tertiary && (
              <Button
                variant={ButtonVariants.tertiary}
                onClick={actions?.tertiary.callback}
                disabled={actions?.tertiary.disabled}
              >
                {actions?.tertiary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </dialog>
  );
};
