import React from "react";

export type RadioProps = {
  errorId?: string;
  hasError?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled">;

export const RadioCommon = ({
  errorId,
  hasError,
  ...inputProps
}: RadioProps) => (
  <span
    className="af-radio"
    aria-invalid={hasError}
    aria-errormessage={errorId}
  >
    <input {...inputProps} type="radio" />
    <span className="af-radio__icons" />
  </span>
);

RadioCommon.displayName = "RadioCommon";
