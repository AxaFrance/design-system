import { useCallback } from "react";
import { TModalHook } from "./type";

export const useModal = ({
  setIsOpen,
  onClose,
  onClickOutside,
}: TModalHook) => {
  const handleCloseModal = useCallback(() => {
    onClose?.();
    setIsOpen(false);
  }, [onClose, setIsOpen]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName !== "DIALOG") {
        return;
      }

      if (onClickOutside) {
        onClickOutside();
        setIsOpen(false);
      } else {
        handleCloseModal();
      }
    },
    [handleCloseModal, onClickOutside, setIsOpen],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    },
    [handleCloseModal],
  );

  return { handleClickOutside, handleKeyDown, handleCloseModal };
};
