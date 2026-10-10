import { type ReactNode, useCallback, useMemo, useState } from "react";
import { getClassName } from "../utilities";
import { ModalTitleContext } from "./ModalTitleContext";

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
   * When omitted, the modal is named by the title of its `ModalHeader`.
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
  const [titleIds, setTitleIds] = useState<string[]>([]);
  const registerTitle = useCallback((titleId: string) => {
    setTitleIds((ids) => [...ids, titleId]);
    return () => setTitleIds((ids) => ids.filter((id) => id !== titleId));
  }, []);
  const titleContext = useMemo(() => ({ registerTitle }), [registerTitle]);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      aria-label={title || undefined}
      aria-labelledby={title ? undefined : titleIds[0]}
      className={componentClassName}
      onClick={onOutsideTap}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        className="af-modal__dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <ModalTitleContext.Provider value={titleContext}>
          <div className="af-modal__content">{children}</div>
        </ModalTitleContext.Provider>
      </div>
    </dialog>
  );
};

Modal.displayName = "Modal";

export { Modal };
