import { forwardRef, type ReactNode } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";

export type ModalCoreProps = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  className?: string;
  title: string;
  onOutsideTap: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: ReactNode;
  ref?: React.Ref<HTMLDialogElement>;
};

const ModalCore = forwardRef<HTMLDialogElement, ModalCoreProps>(
  (
    { className, title = "", onOutsideTap, children, ...props }: ModalCoreProps,
    ref,
  ) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      aria-label={title}
      className={["af-modal", className].filter(Boolean).join(" ")}
      onClick={onOutsideTap}
      ref={ref}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className="af-modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="af-modal__content">{children}</div>
      </div>
    </dialog>
  ),
);

ModalCore.displayName = "ModalCore";

export { ModalCore };
