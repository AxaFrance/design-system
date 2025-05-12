import { forwardRef } from "react";

export type ModalCoreProps = Omit<
  React.JSX.IntrinsicElements["dialog"],
  "title"
> &
  Required<Pick<React.JSX.IntrinsicElements["dialog"], "title">> & {
    ref?: React.Ref<HTMLDialogElement>;
  };

const ModalCore = forwardRef<HTMLDialogElement, ModalCoreProps>(
  ({ className, children, ...props }: ModalCoreProps, ref) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      aria-label={props["aria-label"] ?? props.title}
      className={["af-modal", className].filter(Boolean).join(" ")}
      onClick={props.onClose}
      ref={ref}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <section
        className="af-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </dialog>
  ),
);

ModalCore.displayName = "ModalCore";

export { ModalCore };
