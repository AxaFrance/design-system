import { ReactNode } from "react";

type HelpProps = {
  message?: ReactNode;
  isVisible?: boolean;
  id?: string;
};

export const HelpMessage = ({ message, isVisible = true, id }: HelpProps) =>
  isVisible && (
    <small className="af-form__help" id={id}>
      {message}
    </small>
  );
