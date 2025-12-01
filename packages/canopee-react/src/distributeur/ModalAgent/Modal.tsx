import { forwardRef, type ReactNode } from "react";
import { getComponentClassName } from "../utilities";

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
   * @deprecated Use `size` prop instead.
   * Class modifier for the modal. Can be used to apply custom styles.
   */
  classModifier?: string;
  /**
   * Size of the modal. Overrides classModifier if set
   */
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
      size,
      ...props
    }: ModalProps,
    ref,
  ) => {
    // If size is set to 'lg' or 'sm', use it as the classModifier, otherwise use the provided classModifier
    let effectiveClassModifier: string | undefined;
    if (size) {
      if (classModifier && classModifier !== "lg" && classModifier !== "sm") {
        effectiveClassModifier = `${size} ${classModifier}`;
      } else {
        effectiveClassModifier = size;
      }
    } else {
      effectiveClassModifier = classModifier;
    }
    const componentClassName = getComponentClassName(
      className,
      effectiveClassModifier,
      "af-modal",
    );

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
      <dialog
        aria-label={title}
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
