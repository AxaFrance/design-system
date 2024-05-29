import { ReactNode } from "react";

type HelpProps = {
  message?: ReactNode;
  isVisible?: boolean;
};

export const HelpMessage = ({ message, isVisible = true }: HelpProps) =>
  isVisible && <small className="af-form__help">{message}</small>;
