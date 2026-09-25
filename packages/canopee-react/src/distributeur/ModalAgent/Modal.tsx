import { type ReactNode } from "react";
import { getClassName } from "../utilities";

export type ModalProps = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  size?: "lg" | "sm";
  /**
   * The content of the modal.
   */
  children: ReactNode;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * `aria-label` of the modal, used for accessibility.
   */
  title?: string;
  className?: string;
  /**
   * Size of the modal.
   */
  ref?: React.Ref<HTMLDialogElement>;
};

const Modal = ({
  className,
  title = "",
  onOutsideTap,
  children,
  size,
  ...props
}: ModalProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-modal",
    modifiers: [size],
    className,
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      aria-label={title}
      className={componentClassName}
      onClick={onOutsideTap}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="af-modal__dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="af-modal__content">{children}</div>
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";

export { Modal };
