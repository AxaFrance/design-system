import { ReactNode } from "react";

type HelpProps = {
  message?: ReactNode;
  isVisible?: boolean;
  ariaDescribedBy?: string;
};

export const HelpMessage = ({
  message,
  ariaDescribedBy,
  isVisible = true,
}: HelpProps) =>
  isVisible && (
    <small className="af-form__help" aria-describedby={ariaDescribedBy}>
      {message}
    </small>
  );
