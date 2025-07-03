import React from "react";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled"
>;

export const RadioCommon = (inputProps: RadioProps) => (
  <span className="af-radio">
    <input {...inputProps} type="radio" />
    <span className="af-radio__icons" />
  </span>
);

RadioCommon.displayName = "RadioCommon";
