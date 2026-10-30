import { createContext } from "react";

export type ModalTitleContextValue = {
  /**
   * Called by each ModalHeader on mount with the id of its title, returns its
   * cleanup function. The dialog is named by the first registered title.
   */
  registerTitle: (titleId: string) => () => void;
};

export const ModalTitleContext = createContext<ModalTitleContextValue | null>(
  null,
);
