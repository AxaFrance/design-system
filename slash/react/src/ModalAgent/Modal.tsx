import { forwardRef, type ReactNode } from "react";
import { getComponentClassName } from "../slash";

export type ModalProps = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  className?: string;
  title?: string;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: ReactNode;
  classModifier?: string;
  ref?: React.Ref<HTMLDialogElement>;
};

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className,
      title = "",
      onOutsideTap,
      children,
      classModifier,
      ...props
    }: ModalProps,
    ref,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-modal",
    );

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
      <dialog
        aria-describedby={title}
        className={componentClassName}
        onClick={onOutsideTap}
        ref={ref}
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
  },
);

Modal.displayName = "Modal";

export { Modal };
