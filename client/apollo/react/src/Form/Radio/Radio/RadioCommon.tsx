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
  <div className="af-radio" aria-invalid={hasError} aria-errormessage={errorId}>
    <input {...inputProps} type="radio" />
    <span className="af-radio__icons" />
  </div>
);

RadioCommon.displayName = "RadioCommon";
