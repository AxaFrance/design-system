import React, { forwardRef } from "react";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled"
>;

export const RadioCommon = forwardRef<HTMLInputElement, RadioProps>(
  (inputProps, ref) => (
    <span className="af-radio">
      <input {...inputProps} type="radio" ref={ref} />
      <span className="af-radio__icons" />
    </span>
  ),
);

RadioCommon.displayName = "RadioCommon";
